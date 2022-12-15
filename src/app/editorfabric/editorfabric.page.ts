import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import 'fabric';
declare const fabric: any;

@Component({
  selector: 'app-editorfabric',
  templateUrl: './editorfabric.page.html',
  styleUrls: ['./editorfabric.page.scss'],
})
export class EditorfabricPage implements OnInit {
  @ViewChild('htmlCanvas') htmlCanvas!: ElementRef;

  canvas: any;
  size: any = {
    width: 500,
    height: 300
  };
  canvasTextString: string = '';

  constructor() { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.canvas = new fabric.Canvas(this.htmlCanvas.nativeElement, {
      hoverCursor: 'pointer',
      selection: true,
      selectionBorderColor: 'blue',
      isDrawingMode: false
    });

    this.canvas.on({
      'object:moving': (e: any) => { },
      'object:modified': (e: any) => { },
      'object:selected': (e: any) => { console.log(e) },
      'selection:cleared': (e: any) => { }
    });

    this.canvas.setWidth(this.size.width);
    this.canvas.setHeight(this.size.height);

    this.canvas.add(new fabric.IText('Hello World !'));

    // get references to the html canvas element & its context
    this.canvas.on('mouse:down', (e: any) => {
      const canvasElement: any = document.getElementById('canvas');
    });

  }

  changeSize() {
    this.canvas.setWidth(this.size.width);
    this.canvas.setHeight(this.size.height);
  }

  changeDrawingMode($event: any) {
    this.canvas.isDrawingMode = $event.detail.checked
  }

  removeSelected() {
    const activeObject = this.canvas.getActiveObject();
    const activeGroup = this.canvas.getActiveObjects();

    if (activeObject && !activeObject._objects) {
      this.canvas.remove(activeObject);
    } else if (activeGroup) {
      this.canvas.discardActiveObject();
      activeGroup.forEach((object: any) => {
        this.canvas.remove(object);
      });
    }
  }

  cloneObjects() {
    let object = this.canvas.getActiveObject();
    object.clone((clone: any) => {
      this.canvas.add(clone.set({
        left: object.left + 10,
        top: object.top + 10
      }));
    });
  }

  addText() {
    if (this.canvasTextString) {
      const text = new fabric.IText(this.canvasTextString, {
        left: 10,
        top: 10,
        fontFamily: 'helvetica',
        angle: 0,
        fill: '#000000',
        scaleX: 0.5,
        scaleY: 0.5,
        fontWeight: '',
        hasRotatingPoint: true
      });

      this.extend(text, this.randomId());
      this.canvas.add(text);
      this.selectItemAfterAdded(text);
      this.canvasTextString = '';
    }
  }

  //add background Image
  addBackgroud(e: any) {
    //   const self = this;
    //   fabric.Image.fromURL(data, function(img) {
    //     // add background image
    //     self.canvas.setBackgroundImage(img, self.canvas.renderAll.bind(self.canvas), {
    //        scaleX: self.canvas.width / img.width,
    //        scaleY: self.canvas.height / img.height
    //     });
    //  });
    let file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = (f: any) => {
      var data = f.target.result;
      fabric.Image.fromURL(data, (img: any) => {
        // add background image
        this.canvas.setBackgroundImage(img, this.canvas.renderAll.bind(this.canvas), {
          scaleX: this.canvas.width / img.width,
          scaleY: this.canvas.height / img.height
        });
      });
    };
    reader.readAsDataURL(file);
  }

  getImgPolaroid(event: any) {
    const el = event.target;
    let sp = el.src.split('.')[1]
    if (sp == 'svg') {
      this.loadSVG(el.src);
    } else {
      this.loadPNG(el)
    }
  }

  loadSVG(src: string) {
    fabric.loadSVGFromURL(src, (objects: any, options: any) => {
      const image = fabric.util.groupSVGElements(objects, options);
      image.set({
        left: 10,
        top: 10,
        angle: 0,
        padding: 10,
        cornerSize: 10,
        hasRotatingPoint: true,
      });
      this.extend(image, this.randomId());
      this.canvas.add(image);
      this.selectItemAfterAdded(image);
    });
  }

  loadPNG(imgs: any) {
    let imag: any = imgs; //getting the target image info through its id. 
    let img = new fabric.Image(imag, { //initializing the fabric image.
      left: 10,  //positioning the target on exact position of mouse event drop through event.layerX,Y.
      top: 10,
    });
    img.scaleToWidth(imag.width); //scaling the image height and width with target height and width, scaleToWidth, scaleToHeight fabric inbuilt function. 
    img.scaleToHeight(imag.height);
    this.canvas.add(img);
    this.selectItemAfterAdded(img);
  }

  //Drag n Drop start
  // allowDrop function called on ondragover event.
  allowDrop(e: any) {
    e.preventDefault();
  }

  //dragElement function called on ondrag event.
  dragElement(e: any) {
    e.dataTransfer.setData("id", e.target.id); //transfer the "data" i.e. id of the target dragged.
  }

  //dropElement function called on ondrop event.
  dropElement(e: any) {
    e.preventDefault();
    let data = e.dataTransfer.getData("id"); //receiving the "data" i.e. id of the target dropped.
    let imag: any = document.getElementById(data); //getting the target image info through its id. 
    let img = new fabric.Image(imag, { //initializing the fabric image.
      left: e.layerX - 80,  //positioning the target on exact position of mouse event drop through event.layerX,Y.
      top: e.layerY - 40,
    });
    img.scaleToWidth(imag.width); //scaling the image height and width with target height and width, scaleToWidth, scaleToHeight fabric inbuilt function. 
    img.scaleToHeight(imag.height);
    this.canvas.add(img);


  }
  //Drag n Drop End


  extend(obj: any, id: any) {
    obj.toObject = ((toObject) => {
      return () => {
        return fabric.util.object.extend(toObject.call(this), {
          id
        });
      };
    })(obj.toObject);
  }

  randomId() {
    return Math.floor(Math.random() * 999999) + 1;
  }

  selectItemAfterAdded(obj: any) {
    this.canvas.discardActiveObject().renderAll();
    this.canvas.setActiveObject(obj);
  }


}
