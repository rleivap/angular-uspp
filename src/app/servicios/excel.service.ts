import { Injectable } from '@angular/core';
import * as ExcelJS from 'exceljs';

@Injectable({
  providedIn: 'root',
})
export class ExcelService {
  constructor() {}

  exportToExcel(data: any[], filename: string, sheetName: string) {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet(sheetName);

    // Agregar encabezados de columna
    const columns = Object.keys(data[0]);
    worksheet.addRow(columns);

    // Agregar filas de datos
    data.forEach((item) => {
      const row = columns.map(column => item[column]);
      worksheet.addRow(row);
    });

    // Generar el archivo Excel y descargarlo
    workbook.xlsx.writeBuffer().then((buffer) => {
      const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = `${filename}.xlsx`;
      link.click();
    });
  }
}
