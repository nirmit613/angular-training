import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class componentOneService {
  private data: { id: number; name: string }[] = [];

  public addName(input: string): void {
    if (input) {
      const newId = this.data.length + 1;
      this.data.push({ id: newId, name: input });
    }
  }

  public deleteName(id: number): void {
    this.data = this.data.filter((data) => data.id !== id);
  }

  public getNames() {
    return this.data;
  }
}
