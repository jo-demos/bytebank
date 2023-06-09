import { Component, OnInit } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  transferencias: Transferencia[] = [];
  
  constructor(private transferenciaService: TransferenciaService) { }
  
  ngOnInit() {
    this.transferenciaService.todas().subscribe((transferencias: Transferencia[]) => {
      this.transferencias = transferencias;
    });
  }
}
