import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  exoForm: FormGroup;
  title;
  resume;

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.exoForm = this.fb.group({
      title: ['',Validators.required],
      resume: ['',Validators.required]
    })
  }


}
