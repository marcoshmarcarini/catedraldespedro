import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`; 

const caminho = '/sample.pdf'

export default function Folhas(){
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }: any) {
        setNumPages(numPages);
        setPageNumber(1)
    }

    return(
        <>
            <div>
                <Document file={caminho} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page height={100} width={100} pageNumber={pageNumber}/>
                    <p>Página {pageNumber} de {numPages}</p>
                </Document>
            </div>
        </>
    )
}