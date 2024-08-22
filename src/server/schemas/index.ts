import z from 'zod'

export const LinkSchema = z.object({
  id: z.number(),
  originalUrl: z.string(),
  shortUrl: z.string(),
  description: z.string().optional(),
  tagId: z.number().optional(),
})

export const CreateLinkSchema = z.object({
  originalUrl: z
    .string()
    .min(1, { message: 'URL is required.' })
    .url({
      message: 'Please enter a valid URL. Include http:// or https://',
    })
    .regex(/^(?!.*(?:http|https):\/\/johnsi\.link).*$/, {
      message: 'You cannot redirect to the short url.',
    })
    .regex(/^\S+$/, {
      message: 'URL must not contain any blank spaces.',
    }),
  shortUrl: z
    .string()
    .min(6, {
      message: 'Short link is required and must be at least 6 characters long.',
    })
    .max(16, { message: 'Short link must be less than 17 characters.' })
    .regex(/^[a-zA-Z0-9_-]*$/, {
      message:
        'Custom short link must not contain any blank spaces or special characters.',
    })
    .regex(/^(?!.*&c$)/, {
      message: "Custom short link can't end with &c.",
    }),
  description: z
    .string()
    .max(100, { message: 'The description must be less than 100 characters.' }),
})

export const EditLinkSchema = z
  .object({
    id: z.string(),
  })
  .merge(CreateLinkSchema)

export const DeleteLinkSchema = z.object({
  shortUrl: z.string().min(1, { message: 'Short url is required.' }),
})

export const getSingleLinkSchema = z.object({
  linkId: z.number(),
})

export const CreateTagSchema = z.object({
  name: z.string().min(1, { message: 'Tag name is required.' }).max(15, {
    message: 'Tag name must be less than 15 characters.',
  }),
  color: z.string().min(1, { message: 'Tag color is required.' }),
})

export const UpdateProfileSchema = z.object({
  name: z.string().min(1, { message: 'Name is required.' }).max(40, {
    message: 'Name must be less than 40 characters.',
  }),
  username: z.string().optional(),
  email: z.string().email({ message: 'Invalid email address.' }),
})

export type LinkSchema = z.TypeOf<typeof LinkSchema>
export type CreateLinkInput = z.TypeOf<typeof CreateLinkSchema>
export type EditLinkInput = z.TypeOf<typeof EditLinkSchema>
export type UpdateProfileInput = z.TypeOf<typeof UpdateProfileSchema>
