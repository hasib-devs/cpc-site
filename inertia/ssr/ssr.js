/******/ var __webpack_modules__ = ({

/***/ "./resources/js/Pages/About.tsx":
/*!**************************************!*\
  !*** ./resources/js/Pages/About.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const About = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "About");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);

/***/ }),

/***/ "./resources/js/Pages/Admin/Dashboard.tsx":
/*!************************************************!*\
  !*** ./resources/js/Pages/Admin/Dashboard.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "@inertiajs/inertia-react");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__);



const Dashboard = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Dashboard"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
    href: "/admin/logout",
    method: "post"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, null, "Logout")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);

/***/ }),

/***/ "./resources/js/Pages/Admin/Login.tsx":
/*!********************************************!*\
  !*** ./resources/js/Pages/Admin/Login.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "@inertiajs/inertia-react");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__);



const Login = () => {
  const {
    data,
    setData,
    post,
    processing,
    errors
  } = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.useForm)({
    email: '',
    password: '',
    remember: false
  });
  const [showPassword, setShowPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const handleLogin = () => {
    post('/admin/login');
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "flex flex-col items-center mt-16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-full sm:w-2/3 md:w-1/2 xl:w-2/5 p-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "border rounded p-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Header, {
    as: "h2",
    className: "text-center mb-4"
  }, "Login"), errors['invalid'] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-red-500 text italic mt-1"
  }, errors['invalid'][0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form, {
    onSubmit: handleLogin,
    loading: processing,
    size: "large"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Field, {
    required: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
    value: data.email,
    onChange: e => setData('email', e.target.value),
    placeholder: "Enter your email",
    autoFocus: true,
    type: "email",
    error: Boolean(errors.email)
  }), errors.email && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-red-500 text italic mt-1"
  }, errors.email[0])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Field, {
    required: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
    value: data.password,
    onChange: e => setData('password', e.target.value),
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
      name: showPassword ? 'eye slash' : 'eye',
      link: true,
      onClick: () => setShowPassword(prev => !prev)
    }),
    placeholder: "Enter your password",
    type: showPassword ? 'text' : 'password',
    error: Boolean(errors.password)
  }), errors.password && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-red-500 text italic mt-1"
  }, errors.password[0])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Field, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Checkbox, {
    checked: data.remember,
    onChange: () => setData(prevState => ({
      ...prevState,
      remember: !prevState.remember
    })),
    label: "Remember me"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    disabled: !data.email || !data.password,
    type: "submit",
    color: "blue",
    fluid: true
  }, "Login")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

/***/ }),

/***/ "./resources/js/Pages/Admin/ResetPassword.tsx":
/*!****************************************************!*\
  !*** ./resources/js/Pages/Admin/ResetPassword.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ResetPassword = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "ResetPassword");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResetPassword);

/***/ }),

/***/ "./resources/js/Pages/Auth/ForgotPassword.tsx":
/*!****************************************************!*\
  !*** ./resources/js/Pages/Auth/ForgotPassword.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ForgotPassword = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "ForgotPassword");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForgotPassword);

/***/ }),

/***/ "./resources/js/Pages/Auth/Login.tsx":
/*!*******************************************!*\
  !*** ./resources/js/Pages/Auth/Login.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "@inertiajs/inertia-react");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__);



const Login = () => {
  const {
    info
  } = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.usePage)().props;
  const {
    data,
    setData,
    post,
    processing,
    errors
  } = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.useForm)({
    email: '',
    password: '',
    remember: false
  });
  const [showPassword, setShowPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const handleLogin = () => {
    post('/login');
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Header, {
    as: "h2",
    className: "text-center mb-4"
  }, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "flex flex-col items-center mt-16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-full sm:w-2/3 md:w-1/2 xl:w-2/5 p-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "border rounded p-8"
  }, info?.verifyEmailMessage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    success: true,
    header: "Account created successfully",
    content: "Please verify your email address"
  }), info?.verifyEmailRequired && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    warning: true,
    header: "Please verify your email address",
    content: "We've send you an email with a link to verify your email, please click that link to continue."
  }), errors['invalid'] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-red-500 text italic mt-1"
  }, errors['invalid'][0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form, {
    onSubmit: handleLogin,
    loading: processing,
    size: "large"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Field, {
    required: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
    value: data.email,
    onChange: e => setData('email', e.target.value),
    placeholder: "Enter your email",
    autoFocus: true,
    type: "email",
    error: Boolean(errors.email)
  }), errors.email && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-red-500 text italic mt-1"
  }, errors.email[0])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Field, {
    required: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
    value: data.password,
    onChange: e => setData('password', e.target.value),
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
      name: showPassword ? 'eye slash' : 'eye',
      link: true,
      onClick: () => setShowPassword(prev => !prev)
    }),
    placeholder: "Enter your password",
    type: showPassword ? 'text' : 'password',
    error: Boolean(errors.password)
  }), errors.password && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-red-500 text italic mt-1"
  }, errors.password[0])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Field, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Checkbox, {
    checked: data.remember,
    onChange: () => setData(prevState => ({
      ...prevState,
      remember: !prevState.remember
    })),
    label: "Remember me"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    disabled: !data.email || !data.password,
    type: "submit",
    color: "blue",
    fluid: true
  }, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mt-4 text-center"
  }, "Don't have any account?", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
    href: "/signup",
    className: "text-blue-500 ml-2"
  }, "Please Signup")))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

/***/ }),

/***/ "./resources/js/Pages/Auth/ResetPassword.tsx":
/*!***************************************************!*\
  !*** ./resources/js/Pages/Auth/ResetPassword.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ResetPassword = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "ResetPassword");
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResetPassword);

/***/ }),

/***/ "./resources/js/Pages/Auth/Signup.tsx":
/*!********************************************!*\
  !*** ./resources/js/Pages/Auth/Signup.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "@inertiajs/inertia-react");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__);



const options = [{
  key: 'm',
  text: 'Male',
  value: 'male'
}, {
  key: 'f',
  text: 'Female',
  value: 'female'
}, {
  key: 'o',
  text: 'Other',
  value: 'other'
}];
const Signup = () => {
  const {
    data,
    setData,
    post,
    processing,
    errors
  } = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.useForm)({
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: true
  });
  const [showPassword, setShowPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [showConfirmPassword, setShowConfirmPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const handleSignup = () => {
    post('/signup');
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "flex flex-col items-center mt-16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-full sm:w-2/3 md:w-1/2 xl:w-2/5 p-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "border rounded p-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Header, {
    as: "h2",
    className: "text-center mb-4"
  }, "Signup"), errors['invalid'] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-red-500 text italic mt-1"
  }, errors['invalid'][0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form, {
    onSubmit: handleSignup,
    loading: processing,
    size: "large",
    autoComplete: "off"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Group, {
    widths: "equal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Field, {
    required: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "First Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
    value: data.firstName,
    onChange: e => setData('firstName', e.target.value),
    fluid: true,
    placeholder: "First name"
  }), errors.firstName && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-red-500 text italic mt-1"
  }, errors.firstName[0])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Field, {
    required: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Last Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
    value: data.lastName,
    onChange: e => setData('lastName', e.target.value),
    fluid: true,
    placeholder: "Last name"
  }), errors.lastName && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-red-500 text italic mt-1"
  }, errors.lastName[0]))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Field, {
    required: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Gender"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Select, {
    value: data.gender,
    onChange: (_, {
      value
    }) => setData('gender', value),
    fluid: true,
    options: options,
    error: Boolean(errors.gender)
  }), errors.gender && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-red-500 text italic mt-1"
  }, errors.gender[0])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Field, {
    required: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
    value: data.email,
    onChange: e => setData('email', e.target.value),
    placeholder: "Enter your email",
    autoFocus: true,
    type: "email",
    error: Boolean(errors.email)
  }), errors.email && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-red-500 text italic mt-1"
  }, errors.email[0])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Field, {
    required: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
    value: data.password,
    onChange: e => setData('password', e.target.value),
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
      name: showPassword ? 'eye slash' : 'eye',
      link: true,
      onClick: () => setShowPassword(prev => !prev)
    }),
    type: showPassword ? 'text' : 'password',
    placeholder: "Enter your password",
    error: Boolean(errors.password)
  }), errors.password && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-red-500 text italic mt-1"
  }, errors.password[0])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Field, {
    required: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "Confirm Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
    value: data.confirmPassword,
    onChange: e => setData('confirmPassword', e.target.value),
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
      name: showConfirmPassword ? 'eye slash' : 'eye',
      link: true,
      onClick: () => setShowConfirmPassword(prev => !prev)
    }),
    placeholder: "Confirm your password",
    type: showConfirmPassword ? 'text' : 'password',
    error: Boolean(errors.confirmPassword)
  }), errors.confirmPassword && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-red-500 text italic mt-1"
  }, errors.confirmPassword[0])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Field, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Checkbox, {
    checked: data.acceptTerms,
    onChange: () => setData(prevState => ({
      ...prevState,
      acceptTerms: !prevState.acceptTerms
    })),
    label: "Accept Terms and Conditions"
  }), errors.acceptTerms && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-red-500 text italic mt-1"
  }, errors.acceptTerms[0])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    type: "submit",
    color: "blue",
    fluid: true
  }, "Signup"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mt-4 text-center"
  }, "Already have an account?", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
    href: "/login",
    className: "text-blue-500 ml-2"
  }, "Please Signup"))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Signup);

/***/ }),

/***/ "./resources/js/Pages/Home.tsx":
/*!*************************************!*\
  !*** ./resources/js/Pages/Home.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-react */ "@inertiajs/inertia-react");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);



const Home = () => {
  const {
    user,
    isAuthenticated
  } = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__.usePage)().props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "flex justify-between mt-20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Header, {
    as: "h1"
  }, "Home"), isAuthenticated ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
    href: "/logout",
    method: "POST"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
    secondary: true
  }, "Logout")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
    href: "/login"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
    primary: true
  }, "Login"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("h2", null, user?.first_name, " ", user?.last_name));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./resources/css/app.scss":
/*!********************************!*\
  !*** ./resources/css/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/js/Pages sync recursive ^\\.\\/.*$":
/*!*******************************************!*\
  !*** ./resources/js/Pages/ sync ^\.\/.*$ ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./About": "./resources/js/Pages/About.tsx",
	"./About.tsx": "./resources/js/Pages/About.tsx",
	"./Admin/Dashboard": "./resources/js/Pages/Admin/Dashboard.tsx",
	"./Admin/Dashboard.tsx": "./resources/js/Pages/Admin/Dashboard.tsx",
	"./Admin/Login": "./resources/js/Pages/Admin/Login.tsx",
	"./Admin/Login.tsx": "./resources/js/Pages/Admin/Login.tsx",
	"./Admin/ResetPassword": "./resources/js/Pages/Admin/ResetPassword.tsx",
	"./Admin/ResetPassword.tsx": "./resources/js/Pages/Admin/ResetPassword.tsx",
	"./Auth/ForgotPassword": "./resources/js/Pages/Auth/ForgotPassword.tsx",
	"./Auth/ForgotPassword.tsx": "./resources/js/Pages/Auth/ForgotPassword.tsx",
	"./Auth/Login": "./resources/js/Pages/Auth/Login.tsx",
	"./Auth/Login.tsx": "./resources/js/Pages/Auth/Login.tsx",
	"./Auth/ResetPassword": "./resources/js/Pages/Auth/ResetPassword.tsx",
	"./Auth/ResetPassword.tsx": "./resources/js/Pages/Auth/ResetPassword.tsx",
	"./Auth/Signup": "./resources/js/Pages/Auth/Signup.tsx",
	"./Auth/Signup.tsx": "./resources/js/Pages/Auth/Signup.tsx",
	"./Home": "./resources/js/Pages/Home.tsx",
	"./Home.tsx": "./resources/js/Pages/Home.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/js/Pages sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "@inertiajs/inertia-react":
/*!*******************************************!*\
  !*** external "@inertiajs/inertia-react" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@inertiajs/inertia-react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-hot-toast":
/*!**********************************!*\
  !*** external "react-hot-toast" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("react-hot-toast");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("semantic-ui-react");

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./resources/js/ssr.tsx ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-react */ "@inertiajs/inertia-react");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/app.scss */ "./resources/css/app.scss");
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-toast */ "react-hot-toast");
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_4__);




// import { InertiaProgress } from '@inertiajs/progress'




// InertiaProgress.init()

function render(page) {
  return (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_2__.createInertiaApp)({
    page,
    render: (react_dom_server__WEBPACK_IMPORTED_MODULE_1___default().renderToString),
    resolve: name => __webpack_require__("./resources/js/Pages sync recursive ^\\.\\/.*$")(`./${name}`),
    setup: ({
      App,
      props
    }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Root, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, props))
  });
}
function Root({
  children
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_hot_toast__WEBPACK_IMPORTED_MODULE_4__.Toaster, null));
}
})();

module.exports = __webpack_exports__;
