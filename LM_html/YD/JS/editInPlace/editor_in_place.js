/**
 * @func 就地编辑
 * @param { id: string, parent: string, value: string }
 */
function EditInPlace(id,parent,value) {
  this.id = id;
  this.parent = parent;
  this.value = value || "这个家伙很懒，什么都没有留下"; 
  this.createElements(); // 动态装配html结点
}

EditInPlace.prototype = {
  createElements: function() {
    this.containerElement = document.createElement("div");
    this.containerElement.id = this.id

    // 签名文字部分
    this.staticElement = document.createElement("span");
    this.staticElement.innerText = this.value;
    this.containerElement.appendChild(this.staticElement);

    // 输入框
    this.fieldElement = document.createElement("input");
    this.fieldElement.type = 'text'
    this.fieldElement.value = this.value
    this.containerElement.appendChild(this.fieldElement);

    // save 确认
    this.saveButton = document.createElement("button");
    this.saveButton.type = 'button'
    this.saveButton.innerText = '保存'
    this.containerElement.appendChild(this.saveButton);
    
    // cancel 取消
    this.cancelButton = document.createElement("button");
    this.cancelButton.type = 'button'
    this.cancelButton.innerText = '取消'
    this.containerElement.appendChild(this.cancelButton);

    
    this.parent.appendChild(this.containerElement);
  }
}