import { publicProcedure, router } from '../../trpc';
import { z } from 'zod';
import { PutObjectCommand } from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"
import { r2 } from "@/lib/r2"

export const uploadRouter = router({
  getPresignedUrl: publicProcedure
    .input(z.object({ filename: z.string(), contentType: z.string() }))
    .query(async ({ input }) => {
      const command = new PutObjectCommand({
        Bucket: "your-bucket-name",
        Key: input.filename,
        ContentType: input.contentType,
      })

      const signedUrl = await getSignedUrl(r2, command, { expiresIn: 300 })

      return {
        url: signedUrl,
        r2Url: `https://f7713b8ef4a9e9eb83b0026ada901aef.r2.cloudflarestorage.com/your-bucket-name/${input.filename}`,
      }
    }),  
});



