import slides from './slides.json';

export default{

    async fetchSlide() {
        return await slides;
    }
};