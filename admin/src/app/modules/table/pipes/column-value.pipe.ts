import { Pipe, PipeTransform } from '@angular/core';
import { TableColumn } from '../models/table-column';

@Pipe({
  name: 'columnValue'
})
export class ColumnValuePipe implements PipeTransform {

  transform(row: any, column : TableColumn): unknown {

    let displayValue = row[column.dataKey];
    switch(column.dataType){
      case 'YesNo':
        displayValue = displayValue == 1 ? 'YES' : 'NO';
        break;
      
      default:
        break;
    }

    return displayValue;
  }

}
