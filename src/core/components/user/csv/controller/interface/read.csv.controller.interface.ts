import { Request, ResponseToolkit } from "@hapi/hapi"

export interface IReadCsvController {
    show : (request:Request, h:ResponseToolkit) => Promise<any>
    show2 : (request:Request, h:ResponseToolkit) => any
}