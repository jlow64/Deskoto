import { z } from 'zod';

export const fileSchema = z.instanceof(File, { message: 'Required' });
export const imageSchema = fileSchema.refine(
  (file) => file.size === 0 || file.type.startsWith('image/'),
);

export const addSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  priceInCents: z.coerce.number().int().min(1),
  image: imageSchema.refine((file) => file.size > 0, 'Required'),
});

export const editSchema = addSchema.extend({
  image: imageSchema.optional(),
});
