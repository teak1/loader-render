function loader(frameID,src,retryintervul){
  this.frame = document.getElementById(frameID);
  this.src = src || "about:blank";
  this.loaded = false;
  this.retryintervul = retryintervul || 1000;
  this.content = "";
  this.loading = function(){
    try{
      this.content = this.iframe.contentDocument.body.innerHTML;
    }catch(e){
      setTimeout(this.loading,this.retryintervul);
    }
  }
}
loader.prototype.load = function(){
  this.content = "";
  this.frame.src = this.src;
  this.loading();
}
