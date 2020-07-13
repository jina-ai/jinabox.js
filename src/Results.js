class Results extends HTMLElement {
  constructor() {
    super();
    this.handleDrag = () => {
      console.log('handle drag enter');
    }
    this.handleDragLeave = () => {
      console.log('handle drag leave');
    }
    this.innerHTML = `
		<div class="jina-results-area" id="jina-results-area"></div>
    `;
    this.dropArea = null;
  }
  ready() {
    this.dropArea = document.getElementById('jina-search-input');
    this.dropArea.addEventListener('dragenter', this.handleDrag)
    this.dropArea.addEventListener('drop', this.handleDrop);
    this.dropArea.addEventListener('dragleave', this.handleDragLeave);
  }
}

export default Results;
