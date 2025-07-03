'use client'
import UploadFormInput from "@/components/upload/upload-form-input";
import { log } from "node:console";
import { z } from 'zod'
import { refine } from "zod/v4";

const schema = z.object({
    file: z.instanceof(File, { message: 'Invalid FIle' }).refine((file) => file.size <= 15 * 1024 * 1024,
    )
        .refine((file) => file.type.startsWith('application/pdf'),
            'File must be a PDF'
        )
});
export default function UploadForm() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
        const formData = new FormData(e.currentTarget);
        const file = formData.get("file") as File;

        // validating the fields that the form have/
        const validatedFields = schema.safeParse({ file });
        console.log(validatedFields);
        
        if (!validatedFields.success) {
            console.log(
                validatedFields.error.flatten().fieldErrors.file?. 
                [0] ?? 'Invalid file');
            return;
        }
        // schema validation with zod 
        // upload the file to Upload Things 
        //parse the pdf int lang chain
        // Summarized the pdf into the valuable insides
        // save the summary to the database
        // and after this redirect to the summary page as well as the summary


    }
    return (
        <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
            <UploadFormInput onSubmit={handleSubmit} />
        </div>
    )
}