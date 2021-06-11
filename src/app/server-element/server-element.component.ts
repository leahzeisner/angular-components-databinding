import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {

  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {

  }

  ngOnChanges(changes: SimpleChanges) {

  }

  ngDoCheck() {

  }

  ngOnInit(): void {
    console.log('Text content ' + this.header.nativeElement.textContent)
    console.log('Text content of paragraph ' + this.paragraph.nativeElement.textContent)
  }

  ngAfterContentInit() {

  }

  ngAfterContentChecked() {

  }

  ngAfterViewInit() {
    console.log('Text content ' + this.header.nativeElement.textContent)
    console.log('Text content of paragraph ' + this.paragraph.nativeElement.textContent)
  }

  ngAfterViewChecked() {

  }

  ngOnDestroy() {

  }

}
