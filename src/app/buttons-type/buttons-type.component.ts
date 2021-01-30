import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonType, NgClassValue } from '../model';

@Component({
  selector: 'app-buttons-type',
  templateUrl: './buttons-type.component.html',
  styleUrls: ['./buttons-type.component.scss'],
})
export class ButtonsTypeComponent {
  public buttonType: typeof ButtonType = ButtonType;
  @Input() selectedButtonType: ButtonType;
  @Output() buttonSelectedEvent = new EventEmitter();

  public onButtonSelected(buttonType: ButtonType): void {
    this.buttonSelectedEvent.emit(buttonType);
  }

  public getButtonCss(buttonType: ButtonType): NgClassValue {
    return {
      'button-selected': buttonType === this.selectedButtonType,
    };
  }
}
