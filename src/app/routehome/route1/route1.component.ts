import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router ,Params, ParamMap } from '@angular/router';

@Component({
  selector: 'app-route1',
  templateUrl: './route1.component.html',
  styleUrls: ['./route1.component.css']
})
export class Route1Component implements OnInit {
  id: number;
  constructor(private activatedRoute :ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  //  this.id = +this.activatedRoute.snapshot.params['id'];

    // this.activatedRoute.params.subscribe((params:Params) => {
    //   console.log('below is params');
    //   console.log(this.activatedRoute);
    //   console.log(params['foo']);
    //   this.id = +params['id'];
    // });
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      console.log('below is paramMap');
      console.log(this.activatedRoute);
      console.log(paramMap.getAll('foo'));
      this.id = +paramMap.get('id');
    });
  }

}
