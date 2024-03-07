"use strict";
exports.id = 6060;
exports.ids = [6060];
exports.modules = {

/***/ 6060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ portfolio)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/common/initIsotope.js
var initIsotope = __webpack_require__(5032);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/projectCard/projectCard.js





const ProjectCard = ({
  grid,
  data
}) => {
  const {
    imageUrl,
    title,
    categories
  } = data;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: `${grid === 3 ? "col-lg-4 col-md-6" : grid === 2 ? "col-md-6" : "col-12"} items ${categories.join(" ")} wow fadeInUp`,
    "data-wow-delay": ".4s",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "item-img",
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
        href: `/project-details2/project-details2-dark`,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          className: "imago wow",
          children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
            src: imageUrl,
            alt: "image"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "item-img-overlay"
          })]
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "cont",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
        children: title
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: categories.map((category, index) => /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
            href: `/${category.toLowerCase()}/${category.toLowerCase()}-dark`,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: category
            })
          }), index < categories.length - 1 && ", "]
        }, index))
      })]
    })]
  });
};

/* harmony default export */ const projectCard = (ProjectCard);
;// CONCATENATED MODULE: ./src/components/Portfolio/portfolio.jsx
/* eslint-disable @next/next/no-img-element */






const projectsData = [{
  imageUrl: "https://assets-global.website-files.com/5e593fb060cf877cf875dd1f/64df8f9aaa825a953d1a05c6_artworksgallery1.jpeg",
  title: "Artistic Expressions",
  categories: ["Creative", "Design", "WordPress", "Graphic"]
}, {
  imageUrl: "https://assets-global.website-files.com/5e593fb060cf877cf875dd1f/65524abffc1efd90c8dd0eb3_screenshot1.jpeg",
  title: "Imagination Unleashed",
  categories: ["Creative", "Design", "WordPress", "Graphic"]
}, {
  imageUrl: "https://www.pixelmotives.com/wp-content/uploads/2023/06/portfolio-the-a-list-clinic-525x420.jpg",
  title: "Innovative Creations",
  categories: ["Creative", "Design", "WordPress", "Graphic"]
}, // Web projects
{
  imageUrl: "https://tweakyourbiz.com/wp-content/uploads/2022/05/shutterstock_174574130.jpg",
  title: "Responsive Web Design",
  categories: ["Web"]
}, {
  imageUrl: "https://img.freepik.com/premium-vector/ecommerce-platform-website-landing-page-concept_1234-408.jpg",
  title: "E-Commerce Platform",
  categories: ["Web"]
}, {
  imageUrl: "https://geniusee.com/storage/app/media/blog104/blog104_6.jpg",
  title: "User-Friendly Interfaces",
  categories: ["Web"]
}, // Mobile projects
{
  imageUrl: "https://i.pinimg.com/736x/47/cc/38/47cc381808321e149adf815d3701eb8d.jpg",
  title: "Mobile App Prototype",
  categories: ["Mobile"]
}, {
  imageUrl: "https://i.pinimg.com/736x/ff/a7/c0/ffa7c00a341b27b9197d112b73e2bd6b.jpg",
  title: "Android Development",
  categories: ["Mobile"]
}, {
  imageUrl: "https://i.pinimg.com/736x/ca/ba/45/caba456db19dca113ca53e115e21570c.jpg",
  title: "iOS App Design",
  categories: ["Mobile"]
}, // Blockchain projects
{
  imageUrl: "https://cdn.dribbble.com/users/1728196/screenshots/17151023/media/2bbfa4a9d9687dc0282d372cb775bcff.png?resize=400x0",
  title: "Decentralized Solutions",
  categories: ["Blockchain"]
}, {
  imageUrl: "https://img.freepik.com/premium-vector/blockchain-platform-creative-landing-website-page-vector-illustration_541075-739.jpg?w=2000",
  title: "Smart Contracts Implementation",
  categories: ["Blockchain"]
}, {
  imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN8D0IItqY4-7F90oePJCJwibU-wH1sMaMuDevHUXuXQc2dI_VeyH42fP44ibDHeWy_Vc&usqp=CAU",
  title: "Crypto Wallet Development",
  categories: ["Blockchain"]
}, // AI projects
{
  imageUrl: "https://cdn.dribbble.com/userupload/8049330/file/original-f16c2a1b36c992b32a4e1075dcbf4352.jpg?resize=400x0",
  title: "Machine Learning Algorithms",
  categories: ["AI"]
}, {
  imageUrl: "https://blog.hubspot.com/hs-fs/hubfs/Screenshot%202023-04-11%20at%2012.33.07%20PM.jpg?width=650&height=325&name=Screenshot%202023-04-11%20at%2012.33.07%20PM.jpg",
  title: "Natural Language Processing",
  categories: ["AI"]
}, {
  imageUrl: "https://usercontent.one/wp/www.insidr.ai/wp-content/uploads/2023/04/Writesonic-website-Insidr.ai-ai-tools-768x372.png?media=1705425533",
  title: "Computer Vision Applications",
  categories: ["AI"]
} // Add more project data as needed
];

const Portfolio = ({
  grid,
  filterPosition
}) => {
  external_react_default().useEffect(() => {
    setTimeout(() => {
      (0,initIsotope/* default */.Z)();
    }, 1000);
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: "portfolio section-padding pb-70",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row justify-content-center",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-8 col-md-10",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "sec-head text-center",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
              className: "wow fadeIn",
              "data-wow-delay": ".5s",
              children: "Portfolio"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
              className: "wow color-font",
              children: ["Our Recent Web Design & ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " Some Past Projects."]
            })]
          })
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `${grid === 3 ? "container-fluid" : "container"}`,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: `filtering ${filterPosition === "center" ? "text-center" : filterPosition === "left" ? "text-left" : "text-right"} col-12`,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "filter",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              "data-filter": "*",
              className: "active",
              children: "All"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              "data-filter": ".Web",
              children: "Web"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              "data-filter": ".mobile",
              children: "Mobile App"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              "data-filter": ".blockchain",
              children: "Blockchain"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              "data-filter": ".ai",
              children: "AI"
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "gallery full-width",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "row",
            children: projectsData.map((project, index) => /*#__PURE__*/jsx_runtime_.jsx(projectCard, {
              grid: grid,
              data: project
            }, index))
          })
        })]
      })
    })]
  });
};

/* harmony default export */ const portfolio = (Portfolio);

/***/ })

};
;