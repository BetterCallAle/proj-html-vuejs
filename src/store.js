import { reactive } from "vue";

export const store = reactive({
    allArticles:[
        {
           title : "Morbi vitae dui euismod vulpate sollicitudin",
           date : "October 11th, 2015",
           comments : "2 Comments",
           type : "article",
           text : "Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla, vestibulum placerat metus mattis. Aenan dictum vitae nisl",
           imgBigName : "post_feat_img_25-700x441",
           imgNormalName : "post_feat_img_25-320x202",
           imgSmallName : null,
           imgSmallestName : null,
           imgAlt: "iPhone on a couch"
        },
        {
            title : "Vivamus pellenteque, felis quis varius",
            date : "October 11th, 2015",
            comments : "Comments Off",
            type : "article",
            text : "Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla, vestibulum placerat metus mattis. Aenan dictum vitae nisl",
            imgBigName : "post_feat_img_24-700x441",
            imgNormalName : "post_feat_img_24-320x202",
            imgSmallName : null,
            imgSmallestName : null,
            imgAlt: "iPhone taking sunset photo"
         },
         {
            title : "Donec ornare pretium eget scelisque justo",
            date : "October 11th, 2015",
            comments : "Comments Off",
            type : "article",
            text : "Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla, vestibulum placerat metus mattis. Aenan dictum vitae nisl",
            imgBigName : "post_feat_img_23-700x441",
            imgNormalName : "post_feat_img_23-320x202",
            imgSmallName : "post_feat_img_23-177x142",
            imgSmallestName : "post_feat_img_23-147x118",
            imgAlt: "Smartwatch"
         },
         {
            title : "Fusce sollicitudin nunc sed placerat varius",
            date : "October 11th, 2015",
            comments : "Comments Off",
            type : "article",
            text : "Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla, vestibulum placerat metus mattis. Aenan dictum vitae nisl",
            imgBigName : "post_feat_img_22-700x441",
            imgNormalName : "post_feat_img_22-320x202",
            imgSmallName : "post_feat_img_22-177x142",
            imgSmallestName : "post_feat_img_22-147x118",
            imgAlt: "Tablet"
         },
         {
            title : "Donec facilis sodales leo sit amet laoreet",
            date : "October 11th, 2015",
            comments : "Comments Off",
            type : "article",
            text : "Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla, vestibulum placerat metus mattis. Aenan dictum vitae nisl",
            imgBigName : "post_feat_img_21-700x441",
            imgNormalName : "post_feat_img_21-320x202",
            imgSmallName : null,
            imgSmallestName : null,
            imgAlt: "Camera in a display case"
         },
         {
            title : "Proin eu purus sed aru aliquet curabir vens",
            date : "October 11th, 2015",
            comments : "Comments Off",
            type : "article",
            text : "Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla, vestibulum placerat metus mattis. Aenan dictum vitae nisl",
            imgBigName : "post_feat_img_20-700x441",
            imgNormalName : "post_feat_img_20-320x202",
            imgSmallName : "post_feat_img_20-177x142",
            imgSmallestName : "post_feat_img_20-147x118",
            imgAlt: "Desktop monitor"
         },
         {
            title : "Cras malesuada et orci eget pharetra",
            date : "October 11th, 2015",
            comments : "Comments Off",
            type : "featured article",
            text : "In quis lectus sed leo elementum faucibus in dapibus dictum. Nullamolestie tortor nec lectus venenatis, sed bladit dui, dolor at bibendum sadips ets ipsum dolores ficilis uns leo lectus",
            imgBigName : "featured_article_1_bg",
            imgNormalName : null,
            imgSmallName : null,
            imgSmallestName : null,
            imgAlt: "Hand clicking a smartwatch button"
         },
         {
            title : "Cras malesuada et orci eget pharetra",
            date : "October 11th, 2015",
            comments : "Comments Off",
            type : "reviewed product",
            text : "Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla, vestibulum placerat metus mattis. Aenan dictum vitae nisl",
            imgBigName : "featured_article_2_bg",
            imgNormalName : null,
            imgSmallName : null,
            imgSmallestName : null,
            imgAlt: "Hand holding a smartwatch"
         }
    ],
    articles: [],
    tutorialArticles: [],
    featured: null,
    review: null
})