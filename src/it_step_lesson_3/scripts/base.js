class Media {
    constructor(id) {
        this.video = document.getElementById(id);
        this.itemId = 'vid_' + this.video.id;
        window.addEventListener('beforeunload', this.setTime.bind(this));
        this.getTime();
        this.video.addEventListener('ended', this.remove.bind(this));
    }

    setTime() {
        if (!this.video.ended) {
            localStorage.setItem(this.itemId, this.video.currentTime);
        }
    }

    getTime() {
        if (localStorage.getItem(this.itemId)) {
            this.video.currentTime = localStorage.getItem(this.itemId);
        }
    }

    remove() {
        localStorage.removeItem(this.itemId);
    }
}

new Media('video1');