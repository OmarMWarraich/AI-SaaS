import { Pinecone } from '@pinecone-database/pinecone'
import { downloadFromS3 } from './s3-server'
import {PDFLoader} from 'langchain/document_loaders/fs/pdf'

const pinecone = new Pinecone({
    environment: process.env.NEXT_PUBLIC_PINECONE_ENVIRONMENT!,
    apiKey: process.env.NEXT_PUBLIC_PINECONE_API_KEY!,
})

export default pinecone

export async function loadS3IntoPinecone(fileKey: string) {
    // 1. Obtain the pdf -> download and read from pdf
    console.log('Downloading S3 into file system')
    const file_name = await downloadFromS3(fileKey)
    if (!file_name) {
        throw new Error('Could not download file from S3')
    }
    const loader = new PDFLoader(file_name)
    const pages = await loader.load()
    return pages
}

