/**
 * @file A configuration file for custom settings or
 * templates.
 *
 * @author Jao Austero <jerald.austero0229@gmail.com>
 * @version 1.0.0
 */

module.exports = {
    /**
     * The component directory is the target path when you
     * make a component template.
     * 
     * @type {String}
     * @default ['src/components']
     * 
     * @see {@link https://github.com/jaoaustero/vue-make/docs}
     */
    componentDir: 'src/components',

    /**
     * The page directory is the target path when you
     * make a page template
     * 
     * @type {String}
     * @default ['/src/views']
     * 
     * @see {@link https://github.com/jaoaustero/vue-make/docs}
     */
    pageDir: '/',

    /**
     * The scss directory is the target path when you
     * make a scss fle template
     * 
     * @type {String}
     * @default ['src/scss']
     * 
     * @see {@link https://github.com/jaoaustero/vue-make/docs}
     */
    scssDir: '/',

    /**
     * A custom templates directory, locate your
     * custom file and it will replicate it when you
     * generate a template.
     * 
     * @see {@link https://github.com/jaoaustero/vue-make/docs}
     */
    customTemplates:
    {
        /**
         * Custom template for component
         * 
         * @type {String}
         * @default ['']
         * 
         * @see {@link https://github.com/jaoaustero/vue-make/docs}
         */
        componentDir: 'src/temp/component.vue',

        /**
         * Custom template for page
         * 
         * @type {String}
         * @default ['']
         * 
         * @see {@link https://github.com/jaoaustero/vue-make/docs}
         */
        pageDir: 'src/temp/page.vue',

        /**
         * Custom template for scss
         * 
         * @type {String}
         * @default ['']
         * 
         * @see {@link https://github.com/jaoaustero/vue-make/docs}
         */
        scssDir: '',
    }
};
