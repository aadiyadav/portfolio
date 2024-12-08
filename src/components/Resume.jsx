import {pdfjs, Document, Page} from 'react-pdf'
import resume from '../../public/assets/resume.pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'

export default function Resume(){
    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
    ).toString();
    
    return(
    <div className='bg-back text-white h-full min-h-screen flex flex-col items-center justify-center md:py-10 sm:py-6 py-4'>
        <div>
        <div className="md:text-4xl text-3xl font-bold mb-8 md:mt-4 ml-4 font-seven">My Resume</div>
        <div className='md:mx-4 mx-2'>
        <Document file={resume} onLoadError={console.error}>
            <Page pageNumber={1} width={Math.min(window.innerWidth * 0.9, 800)}/>
        </Document>
        </div>
        </div>
        <div>
            <a href={resume} download>
            <button className='mt-6 border text-black bg-white lg:text-lg md:text-base text-sm py-2 px-4 rounded-sm hover:bg-back hover:text-white hover:border transition-all font-thre'>Download as PDF</button>
            </a>
        </div>
    </div>
    )
}