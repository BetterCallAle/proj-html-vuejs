import { reactive } from "vue";

export const store = reactive({
   // Articles data
    allArticles:[
        {
           title : "Morbi vitae dui euismod vulpate sollicitudin",
           date : "October 11th, 2015",
           comments : "2 Comments",
           url: "/morbi",
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
            url: "/vivamus",
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
            url: "/donec",
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
            url: "/fusce",
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
            url: "/donec-facilis",
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
            url: "/proin",
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
            url: "/cras",
            type : "featured article",
            text : "In quis lectus sed leo elementum faucibus in dapibus dictum. Nullamolestie tortor nec lectus venenatis, sed bladit dui, dolor at bibendum sadips ets ipsum dolores ficilis uns leo lectus",
            imgBigName : "featured_article_1_bg",
            imgNormalName : null,
            imgSmallName : null,
            imgSmallestName : null,
            imgAlt: "Hand clicking a smartwatch button"
         },
         {
            title : "Marius viverra atisan ipsum eget felis primis efficitur varius",
            date : "October 11th, 2015",
            comments : "Comments Off",
            url: "/cras-malesuada",
            type : "reviewed product",
            text : "In quis lectus sed leo elementum faucibus in dapibus dictum. Nullamolestie tortor nec lectus venenatis, sed bladit dui, dolor at bibendum sadips ets ipsum dolores ficilis uns leo lectus",
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
    review: null,
   // Footer menu data
   popular: [
      {
         linkTxt: "Nam a dolor volupat massa auctor semper",
         linkUrl: "/nam"
      },
      {
         linkTxt: "Sed euismod nunc urna fermentum arcu dapibus fringilla",
         linkUrl: "/sed"
      },
      {
         linkTxt: "Cras lacinia tellus id mauris finibus lacus molestie",
         linkUrl: "/cras"
      },
      {
         linkTxt: "Curabitur a scelerisque ligula",
         linkUrl: "/curabitur"
      }
  ],
  recent: [
      {
         linkTxt: "Cras lacinia tellus id mauris finibus lacus molestie",
         linkUrl: "/cras"
      },
      {
         linkTxt: "Proin at ligula sagittis vestibulum nisi vitae",
         linkUrl: "/prin"
      },
      {
         linkTxt: "Sed nec metus at est tincidunt elementum",
         linkUrl: "/sed"
      },
      {
         linkTxt: "Nulla egestas nulla eu nulla suscipit molestie",
         linkUrl: "/nulla"
      }
  ],
  latest:[
      {
         linkTxt: "Cras lacinia tellus id mauris finibus lacus molestie",
         linkUrl: "/cras"
      },
      {
         linkTxt: "Cras lacinia tellus id mauris finibus lacus molestie",
         linkUrl: "/cras"
      },
      {
         linkTxt: "Nulla egestas nulla eu nulla suscipit molestie",
         linkUrl: "/nulla"
      },
      {
         linkTxt: "Mauris ac nibh quis eros sagittis lacinia a et dui",
         linkUrl: "/mauris"
      }
  ]
})