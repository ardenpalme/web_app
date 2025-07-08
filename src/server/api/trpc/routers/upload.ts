import { publicProcedure, router } from '../../trpc';
import { z } from 'zod';

const WORKER_UPLOAD_URL = "https://r2-worker.ardenpalme.workers.dev/api/files";
const PRESHARED_AUTH_HEADER_VALUE = "e3a1c6b4d9f27a815b3cf1d6982ab6ed973420e8795a6f8cda2f5f4135c4a0ee";//process.env.NEXT_PUBLIC_PRESHARED_AUTH_HEADER_VALUE!;

export const uploadRouter = router({
  uploadFile: publicProcedure
    .input(
      z.object({
        file: z.instanceof(File),
        fname: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const file = input.file;
      const fname = input.fname;
      const form = new FormData();
      form.append("file", file, fname);

      const res = await fetch(`${WORKER_UPLOAD_URL}/${encodeURIComponent(fname)}`, {
        method: "PUT",
        headers: {
          "x-custom-psk": PRESHARED_AUTH_HEADER_VALUE,
        },
        body: form,
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Upload failed: ${res.status} - ${errorText}`);
      }

      return {
        success: true,
        filename: fname,
        //r2Url: `https://<your-cdn-domain>/${file.name}`, // optional
      };
    }),
});
