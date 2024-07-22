import { Component } from '@angular/core';
import { DebtService } from '../../services/debt/debt.service';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-debt-manager',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './debt-manager.component.html',
  styleUrl: './debt-manager.component.sass',
})
export class DebtManagerComponent implements OnInit {
  debts: any[] = [];

  constructor(private debtService: DebtService) {}

  ngOnInit(): void {
    this.loadDebts();
  }

  loadDebts(): void {
    this.debtService.getDebts().subscribe((debts) => {
      this.debts = debts;
    });
  }

  addDebt(
    creditor: string,
    amount: number,
    currency: string,
    dueDate: string,
  ): void {
    const newDebt = { creditor, amount, currency, dueDate };
    this.debtService.addDebt(newDebt).subscribe((debt) => {
      this.debts.push(debt);
    });
  }

  deleteDebt(id: string): void {
    this.debtService.deleteDebt(id).subscribe(() => {
      this.debts = this.debts.filter((debt) => debt._id !== id);
    });
  }
}
