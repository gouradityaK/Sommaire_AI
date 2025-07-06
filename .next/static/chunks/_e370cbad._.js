(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/components/ui/button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/input.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Input": (()=>Input)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/upload/upload-form-input.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>UploadFormInput)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
'use client';
;
;
;
function UploadFormInput({ onSubmit }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: "flex flex-col gap-6",
        onSubmit: onSubmit,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-end items-center gap-1.5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                    id: "file",
                    type: "file",
                    name: "file",
                    accept: "application/pdf",
                    required: true,
                    className: ""
                }, void 0, false, {
                    fileName: "[project]/components/upload/upload-form-input.tsx",
                    lineNumber: 11,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    children: "Upload Your PDF"
                }, void 0, false, {
                    fileName: "[project]/components/upload/upload-form-input.tsx",
                    lineNumber: 18,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/upload/upload-form-input.tsx",
            lineNumber: 10,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/upload/upload-form-input.tsx",
        lineNumber: 9,
        columnNumber: 9
    }, this);
}
_c = UploadFormInput;
var _c;
__turbopack_context__.k.register(_c, "UploadFormInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/utils/uploadthing.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useUploadThing": (()=>useUploadThing)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadthing$2f$react$2f$dist$2f$use$2d$uploadthing$2d$be6B2S$2d2d2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@uploadthing/react/dist/use-uploadthing-be6B2S--.js [app-client] (ecmascript)");
;
const { useUploadThing } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uploadthing$2f$react$2f$dist$2f$use$2d$uploadthing$2d$be6B2S$2d2d2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateReactHelpers"])();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/upload/upload-form.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// 'use client'
// import UploadFormInput from "@/components/upload/upload-form-input";
// import { useUploadThing } from "@/utils/uploadthing";
// import { useSonner } from "sonner"
// import { z } from 'zod'
// const schema = z.object({
//     file: z.instanceof(File, { message: 'Invalid FIle' }).refine((file) => file.size <= 15 * 1024 * 1024,
//     )
//         .refine((file) => file.type.startsWith('application/pdf'),
//             { message: 'File must be a PDF' }
//         ),
// });
// export default function UploadForm() {
//     const { startUpload } = useUploadThing
//         ('pdfUploader', {
//             onClientUploadComplete: () => {
//                 console.log("uploaded successfully!");
//             },
//             onUploadError: (error) => {
//                 console.error("error occurred while uploading", error);
//             },
//             onUploadBegin: ({ file }) => {
//                 console.log("upload has begun for", file);
//             },
//         });
//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         console.log("Form submitted");
//         const formData = new FormData(e.currentTarget);
//         const file = formData.get("file") as File;
//         // validating the fields that the form have/
//         const validatedFields = schema.safeParse({ file });
//         console.log(validatedFields);
//         if (!validatedFields.success) {
//             console.log(
//                 validatedFields.error.flatten().fieldErrors.file?.
//                 [0] ?? 'Invalid file'
//             );
//             return;
//         }
//         // schema validation with zod 
//         // upload the file to Upload Things 
//         const resp = await startUpload([file]);
//         if (!resp) {
//             return;
//         }
//         //parse the pdf int lang chain
//         // Summarized the pdf into the valuable insides
//         // save the summary to the database
//         // and after this redirect to the summary page as well as the summary
//     };
//     return (
//         <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
//             <UploadFormInput onSubmit={handleSubmit} />
//         </div>
//     );
// }
// 'use client'
// import UploadFormInput from "@/components/upload/upload-form-input"
// import { useUploadThing } from "@/utils/uploadthing"
// import { toast } from "sonner" // ✅ Import toast here
// import { z } from "zod"
// const schema = z.object({
//     file: z
//         .instanceof(File, { message: "Invalid File" })
//         .refine((file) => file.size <= 15 * 1024 * 1024, {
//             message: "File size must be under 15MB",
//         })
//         .refine((file) => file.type.startsWith("application/pdf"), {
//             message: "File must be a PDF",
//         }),
// })
// export default function UploadForm() {
//     const { startUpload } = useUploadThing("pdfUploader", {
//         onClientUploadComplete: () => {
//             // console.log("uploaded successfully!")
//             toast.success("Uploaded successfully!")
//         },
//         onUploadError: (error) => {
//             // console.error("error occurred while uploading", error)
//             toast.error("Upload failed", {
//                 description: error.message,
//             })
//         },
//         onUploadBegin: ({ file }) => {
//             console.log("upload has begun for", file)
//             toast("Uploading...", {
//                 description: file.name,
//             })
//         },
//     })
//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault()
//         console.log("Form submitted")
//         const formData = new FormData(e.currentTarget)
//         const file = formData.get("file") as File
//         const validatedFields = schema.safeParse({ file })
//         if (!validatedFields.success) {
//             const message =
//                 validatedFields.error.flatten().fieldErrors.file?.[0] ?? "Invalid file"
//             toast.error("Validation Error", {
//                 description: message,
//                 className: "bg-red-100 text-red-800 border border-red-400", // like "destructive"
//                 icon: "❌",
//             })
//             //     toast("Validation Error", {
//             //   description: message,
//             //   className: "bg-red-100 text-red-800 border border-red-400", // like "destructive"
//             //   icon: "❌",
//             // })
//             return
//         }
//         toast('Uploading.......',
//             {
//                 description: 'We are uploading your pdf!',
//             }
//         )
//         const resp = await startUpload([file])
//         if (!resp) {
//             toast("Something went wrong during upload",{
//                 description:'please used another file',
//                 className: "bg-red-100 text-red-800 border border-red-400"
//             })
//             return;
//         }
//         toast('Processing the PDF',
//             {
//                 description: 'Hang tight!  Our AI is reading through your document .',
//             }
//         )
//         // Further steps after successful upload (e.g., call backend or redirect)
//     }
//     return (
//         <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
//             <UploadFormInput onSubmit={handleSubmit} />
//         </div>
//     )
// }
__turbopack_context__.s({
    "default": (()=>UploadForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$upload$2f$upload$2d$form$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/upload/upload-form-input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$uploadthing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/uploadthing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v3/index.js [app-client] (ecmascript) <export * as z>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const schema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    file: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v3$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].instanceof(File, {
        message: "Invalid File"
    }).refine((file)=>file.size <= 15 * 1024 * 1024, {
        message: "File size must be under 15MB"
    }).refine((file)=>file.type.startsWith("application/pdf"), {
        message: "File must be a PDF"
    })
});
function UploadForm() {
    _s();
    const { startUpload } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$uploadthing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUploadThing"])("pdfUploader", {
        onClientUploadComplete: {
            "UploadForm.useUploadThing": (res)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Upload complete!", {
                    description: "Your PDF is being processed."
                });
                console.log("Uploaded files:", res) // Debug uploaded files
                ;
            }
        }["UploadForm.useUploadThing"],
        onUploadError: {
            "UploadForm.useUploadThing": (error)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Upload failed", {
                    description: error.message || "Please try again."
                });
                console.error("UploadThing error:", error) // Log full error
                ;
            }
        }["UploadForm.useUploadThing"]
    });
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const file = formData.get("file");
        // Debug: Log file details
        console.log("Selected file:", {
            name: file.name,
            type: file.type,
            size: file.size
        });
        // Validate file
        const validatedFields = schema.safeParse({
            file
        });
        if (!validatedFields.success) {
            const errorMessage = validatedFields.error.flatten().fieldErrors.file?.[0] ?? "Invalid file";
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Validation error", {
                description: errorMessage
            });
            return;
        }
        // Start upload
        const uploadToast = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].loading("Uploading your PDF...");
        try {
            const resp = await startUpload([
                file
            ]);
            if (!resp) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Upload failed", {
                    description: "No response received.",
                    id: uploadToast
                });
                return;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Processing started!", {
                description: "AI is analyzing your document...",
                id: uploadToast
            });
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Unexpected error", {
                description: "Please try again later.",
                id: uploadToast
            });
            console.error("Submission error:", err);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-8 w-full max-w-2xl mx-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$upload$2f$upload$2d$form$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            onSubmit: handleSubmit
        }, void 0, false, {
            fileName: "[project]/components/upload/upload-form.tsx",
            lineNumber: 245,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/upload/upload-form.tsx",
        lineNumber: 244,
        columnNumber: 9
    }, this);
}
_s(UploadForm, "xZlQN3jDvUV9oVVUveiPHfpsIlQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$uploadthing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUploadThing"]
    ];
});
_c = UploadForm;
var _c;
__turbopack_context__.k.register(_c, "UploadForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_e370cbad._.js.map