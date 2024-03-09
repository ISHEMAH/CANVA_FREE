"use strict";
exports.id = 2075;
exports.ids = [2075];
exports.modules = {

/***/ 2767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ navbar_full_menu)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/data/app.json
var app = __webpack_require__(2806);
// EXTERNAL MODULE: ./src/common/getSiblings.js
var getSiblings = __webpack_require__(7420);
;// CONCATENATED MODULE: ./src/common/animateElement.js
const animateElement = (el, to) => {
  function draw() {
    el.style.left = to;
  }

  draw();
};

/* harmony default export */ const common_animateElement = (animateElement);
;// CONCATENATED MODULE: ./src/common/delay.js
const delay = (time, callback) => {
  setTimeout(function () {
    callback;
  }, time);
};

/* harmony default export */ const common_delay = (delay);
;// CONCATENATED MODULE: ./src/common/initFullNavbarMenu.js





const initFullNavbarMenu = () => {
  function noScroll() {
    window.scrollTo(0, 0);
  }

  var open = false,
      navDark = document.querySelector(".topnav.dark"),
      logoChan = document.querySelector(".topnav.dark .logo img"),
      menuIcon = document.querySelector(".topnav .menu-icon");

  if (menuIcon) {
    menuIcon.addEventListener("click", function () {
      open = !open;
      document.querySelector(".hamenu").classList.toggle("open");

      if (open) {
        common_animateElement(document.querySelector(".hamenu"), "0px");
        document.querySelector(".topnav .menu-icon .text ").classList.add("open");

        if (navDark) {
          navDark.classList.add("navlit");
        }

        if (logoChan) {
          logoChan.setAttribute("src", app/* lightLogo */.E8);
        }

        window.addEventListener("scroll", noScroll);
      } else {
        common_delay(300, common_animateElement(document.querySelector(".hamenu"), "-100%"));
        document.querySelector(".topnav .menu-icon .text").classList.remove("open");

        if (navDark) {
          navDark.classList.remove("navlit");
        }

        if (logoChan) {
          logoChan.setAttribute("src", app/* darkLogo */.Q1);
        }

        window.removeEventListener("scroll", noScroll);
      }
    });
    document.querySelectorAll(".main-menu a").forEach(item => {
      item.addEventListener("click", () => {
        common_delay(300, common_animateElement(document.querySelector(".hamenu"), "-100%"));
        document.querySelector(".topnav .menu-icon .text").classList.remove("open");

        if (navDark) {
          navDark.classList.remove("navlit");
        }

        if (logoChan) {
          logoChan.setAttribute("src", app/* darkLogo */.Q1);
        }

        window.removeEventListener("scroll", noScroll);
      });
    });
  }

  document.querySelectorAll(".hamenu .menu-links .main-menu > li").forEach(item => {
    item.addEventListener("mouseenter", function () {
      this.style.opacity = "1";
      (0,getSiblings/* default */.Z)(this).forEach(item => {
        item.style.opacity = ".5";
      });
    });
    item.addEventListener("mouseleave", function () {
      document.querySelectorAll(".hamenu .menu-links .main-menu > li").forEach(item2 => {
        item2.style.opacity = "1";
      });
    });
  });

  if (document.querySelectorAll(".main-menu > li .dmenu").length) {
    document.querySelectorAll(".main-menu > li .dmenu").forEach(item => {
      item.addEventListener("click", function () {
        document.querySelector(".main-menu").classList.add("gosub");
        (0,getSiblings/* default */.Z)(this.parentNode.parentNode).forEach(item => {
          item.childNodes[1] ? item.childNodes[1].classList.remove("sub-open") : "";
        });
        this.parentNode.parentNode.childNodes[1].classList.add("sub-open");
      });
    });
  }

  if (document.querySelectorAll(".main-menu .sub-menu li .sub-link.back").length) {
    document.querySelectorAll(".main-menu .sub-menu li .sub-link.back").forEach(item => {
      item.addEventListener("click", function () {
        document.querySelector(".main-menu").classList.remove("gosub");
        document.querySelector(".main-menu").classList.remove("sub-open");
      });
    });
  }
};

/* harmony default export */ const common_initFullNavbarMenu = (initFullNavbarMenu);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/Navbar-full-menu/navbar.full-menu.jsx
/* eslint-disable @next/next/no-img-element */








const NavbarFullMenu = ({
  theme
}) => {
  external_react_default().useEffect(() => {
    common_initFullNavbarMenu();
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      id: "navi",
      className: `topnav ${theme ? theme === "light" ? "light" : "" : ""}`,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container-fluid",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "logo",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "#0",
            children: theme ? theme === "light" ? /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: app/* darkLogo */.Q1,
              alt: "logo"
            }) : /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: app/* lightLogo */.E8,
              alt: "logo"
            }) : /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: app/* lightLogo */.E8,
              alt: "logo"
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "menu-icon",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            className: "icon",
            children: [/*#__PURE__*/jsx_runtime_.jsx("i", {}), /*#__PURE__*/jsx_runtime_.jsx("i", {})]
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "text",
            "data-splitting": true,
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "menu-text word",
              children: "Menu"
            })
          })]
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "hamenu",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-9 col-md-8",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "menu-links",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                className: "main-menu",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "o-hidden",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                      className: "link dmenu",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                        className: "nm",
                        children: "01."
                      }), "Home", /*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "fas fa-angle-right"
                      })]
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "sub-menu",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "o-hidden",
                          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                            className: "sub-link back",
                            children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                              className: "pe-7s-angle-left"
                            }), " Go Back"]
                          })
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "o-hidden",
                          children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                            href: `/homepage/home1-dark`,
                            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                              className: "sub-link",
                              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                                className: "nm",
                                children: "01."
                              }), "Main Home"]
                            })
                          })
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "o-hidden",
                          children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                            href: `/homepage/home2-dark`,
                            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                              className: "sub-link",
                              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                                className: "nm",
                                children: "02."
                              }), "Creative Agency"]
                            })
                          })
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "o-hidden",
                          children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                            href: `/homepage/home5-dark`,
                            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                              className: "sub-link",
                              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                                className: "nm",
                                children: "03."
                              }), "Digital Agency"]
                            })
                          })
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "o-hidden",
                          children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                            href: `/homepage/home4-dark`,
                            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                              className: "sub-link",
                              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                                className: "nm",
                                children: "04."
                              }), "Business One Page"]
                            })
                          })
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "o-hidden",
                          children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                            href: `/homepage/home3-dark`,
                            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                              className: "sub-link",
                              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                                className: "nm",
                                children: "05."
                              }), "Corporate Business"]
                            })
                          })
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "o-hidden",
                          children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                            href: `/homepage/home6-dark`,
                            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                              className: "sub-link",
                              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                                className: "nm",
                                children: "06."
                              }), "Modern Agency"]
                            })
                          })
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "o-hidden",
                          children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                            href: `/homepage/home7-dark`,
                            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                              className: "sub-link",
                              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                                className: "nm",
                                children: "07."
                              }), "Freelancer"]
                            })
                          })
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "o-hidden",
                          children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                            href: `/homepage/home8-dark`,
                            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                              className: "sub-link",
                              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                                className: "nm",
                                children: "08."
                              }), "Architecture"]
                            })
                          })
                        })
                      })]
                    })
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "o-hidden",
                    children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                      href: `/about/about-dark`,
                      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                        className: "link",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                          className: "nm",
                          children: "02."
                        }), "About Us"]
                      })
                    })
                  })
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "o-hidden",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                      className: "link dmenu",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                        className: "nm",
                        children: "03."
                      }), "Works", /*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "fas fa-angle-right"
                      })]
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "sub-menu",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "o-hidden",
                          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                            className: "sub-link back",
                            children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                              className: "pe-7s-angle-left"
                            }), " Go Back"]
                          })
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "o-hidden",
                          children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                            href: `/showcase/showcase-dark`,
                            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                              className: "sub-link",
                              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                                className: "nm",
                                children: "01."
                              }), "ShowCase Parallax"]
                            })
                          })
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "o-hidden",
                          children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                            href: `/showcase4/showcase4-dark`,
                            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                              className: "sub-link",
                              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                                className: "nm",
                                children: "02."
                              }), "ShowCase Carousel"]
                            })
                          })
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "o-hidden",
                          children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                            href: `/showcase3/showcase3-dark`,
                            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                              className: "sub-link",
                              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                                className: "nm",
                                children: "03."
                              }), "ShowCase Circle"]
                            })
                          })
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "o-hidden",
                          children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                            href: `/works/works-dark`,
                            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                              className: "sub-link",
                              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                                className: "nm",
                                children: "04."
                              }), "Portfolio Masonry"]
                            })
                          })
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "o-hidden",
                          children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                            href: `/works2/works2-dark`,
                            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                              className: "sub-link",
                              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                                className: "nm",
                                children: "05."
                              }), "Portfolio Filtering"]
                            })
                          })
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "o-hidden",
                          children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                            href: `/works3/works3-dark`,
                            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                              className: "sub-link",
                              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                                className: "nm",
                                children: "06."
                              }), "Portfolio Gallery"]
                            })
                          })
                        })
                      })]
                    })
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "o-hidden",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                      className: "link dmenu",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                        className: "nm",
                        children: "04."
                      }), "Blogs", /*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: "fas fa-angle-right"
                      })]
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "sub-menu",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "o-hidden",
                          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                            className: "sub-link back",
                            children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                              className: "pe-7s-angle-left"
                            }), " Go Back"]
                          })
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "o-hidden",
                          children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                            href: `/blog/blog-dark`,
                            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                              className: "sub-link",
                              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                                className: "nm",
                                children: "01."
                              }), "Blog Standerd"]
                            })
                          })
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "o-hidden",
                          children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                            href: `/blog-list/blog-list-dark`,
                            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                              className: "sub-link",
                              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                                className: "nm",
                                children: "02."
                              }), "Blog List"]
                            })
                          })
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "o-hidden",
                          children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                            href: `/blog-grid/blog-grid-dark`,
                            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                              className: "sub-link",
                              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                                className: "nm",
                                children: "03."
                              }), "Blog Grid"]
                            })
                          })
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                          className: "o-hidden",
                          children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                            href: `/blog-details/blog-details-dark`,
                            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                              className: "sub-link",
                              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                                className: "nm",
                                children: "04."
                              }), "Blog Details"]
                            })
                          })
                        })
                      })]
                    })
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "o-hidden",
                    children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                      href: `/contact/contact-dark`,
                      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                        className: "link",
                        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                          className: "nm",
                          children: "05."
                        }), "Contact"]
                      })
                    })
                  })
                })]
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-3 col-md-4",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "cont-info",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "item",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                  children: "Phone :"
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: "+03 762-2367-723"
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "item",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                  children: "Address :"
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: "541 Melville Ave, Palo Alto, CA 94301, ask@ohio.colabr.io"
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "item",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                  children: "Email :"
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    href: "#0",
                    children: "Vie_website@gmail.com"
                  })
                })]
              })]
            })
          })]
        })
      })
    })]
  });
};

/* harmony default export */ const navbar_full_menu = (NavbarFullMenu);

/***/ }),

/***/ 265:
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"title":{"first":"Midnight","second":"Snack"},"image":"/img/portfolio/full/1.jpg","sub":"Design"},{"id":2,"title":{"first":"Fisherman","second":"Portrait"},"image":"/img/portfolio/full/2.jpg","sub":"Design"},{"id":3,"title":{"first":"Tribos","second":"Urbanas"},"image":"/img/portfolio/full/3.jpg","sub":"Design"},{"id":4,"title":{"first":"Monsoon","second":"in the city"},"image":"/img/portfolio/full/4.jpg","sub":"Design"}]');

/***/ })

};
;