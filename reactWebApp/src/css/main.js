import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "animated": {
        "WebkitAnimationDuration": "1s",
        "MozAnimationDuration": "1s",
        "OAnimationDuration": "1s",
        "animationDuration": "1s",
        "WebkitAnimationFillMode": "both",
        "MozAnimationFillMode": "both",
        "OAnimationFillMode": "both",
        "animationFillMode": "both"
    },
    "animatedfast": {
        "WebkitAnimationDuration": ".5s",
        "MozAnimationDuration": ".5s",
        "OAnimationDuration": ".5s",
        "animationDuration": ".5s"
    },
    "animatedpulse": {
        "WebkitAnimationName": "pulse",
        "MozAnimationName": "pulse",
        "OAnimationName": "pulse",
        "animationName": "pulse"
    },
    "animatedfadeInLeft": {
        "WebkitAnimationName": "fadeInLeft",
        "MozAnimationName": "fadeInLeft",
        "OAnimationName": "fadeInLeft",
        "animationName": "fadeInLeft"
    },
    "ellipsis": {
        "whiteSpace": "nowrap",
        "overflow": "hidden",
        "textOverflow": "ellipsis"
    },
    "animatedfadeInRight": {
        "WebkitAnimationName": "fadeInRight",
        "MozAnimationName": "fadeInRight",
        "OAnimationName": "fadeInRight",
        "animationName": "fadeInRight"
    },
    "table-wrap": {
        "overflow": "auto"
    },
    "inbox-body": {
        "position": "relative"
    },
    "inbox-body table-wrap": {
        "background": "#fff",
        "paddingTop": 10,
        "paddingRight": 14,
        "paddingBottom": 7,
        "paddingLeft": 14,
        "position": "relative",
        "overflowX": "hidden",
        "minHeight": 400
    },
    "inbox-bodyno-content-padding": {
        "marginTop": 0,
        "background": "#fff",
        "overflow": "hidden"
    },
    "inbox-nav-bar": {
        "height": 70,
        "marginBottom": 0,
        "paddingTop": 20,
        "paddingRight": 0,
        "paddingBottom": 20,
        "paddingLeft": 0,
        "background": "#fff"
    },
    "inbox-nav-bar page-title": {
        "display": "inline-block",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "width": 196,
        "lineHeight": 33,
        "verticalAlign": "middle"
    },
    "inbox-footer": {
        "position": "absolute",
        "bottom": -53
    },
    "inbox-footer btn-group": {
        "marginLeft": 10
    },
    "inbox-paging": {
        "marginLeft": 10
    },
    "inbox-table": {
        "fontSize": 13,
        "borderTop": "none",
        "borderLeftColor": "transparent!important",
        "borderRightColor": "transparent!important"
    },
    "inbox-table tbody tr:hover": {
        "cursor": "pointer",
        "background": "#E4E4E4"
    },
    "inbox-table tr td": {
        "borderRight": "none",
        "borderLeft": "none",
        "lineHeight": 26,
        "paddingTop": 6,
        "paddingRight": 4,
        "paddingBottom": "7px!important",
        "paddingLeft": 4
    },
    "inbox-table inbox-table-icon": {
        "paddingLeft": "15px!important"
    },
    "inbox-table tbody tr th": {
        "overflow": "hidden"
    },
    "inbox-tabletable tbody>tr>td": {
        "borderColor": "#fff!important"
    },
    "inbox-table checkbox": {
        "marginTop": -1,
        "marginBottom": 0
    },
    "inbox-table radio": {
        "marginTop": -1,
        "marginBottom": 0
    },
    "inbox-data-attachment": {
        "width": 28,
        "textAlign": "left",
        "paddingLeft": "12px!important",
        "paddingRight": "0!important"
    },
    "inbox-table-icon": {
        "width": 28,
        "textAlign": "left",
        "paddingLeft": "12px!important",
        "paddingRight": "0!important"
    },
    "inbox-data-from": {
        "width": 200
    },
    "inbox-data-from>:first-child": {
        "width": 200,
        "display": "block",
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "whiteSpace": "nowrap"
    },
    "inbox-data-date": {
        "width": 80,
        "paddingLeft": "7px!important",
        "paddingRight": "0!important"
    },
    "inbox-data-message>:first-child": {
        "width": "100%",
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "whiteSpace": "nowrap",
        "height": 27,
        "color": "#8A8A8A"
    },
    "inbox-data-message>:first-child span": {
        "color": "#111"
    },
    "inbox-data-message>:first-child spanlabel": {
        "color": "#fff"
    },
    "inbox-data-message>:first-child>:first-child:after": {
        "content": " - "
    },
    "unread td": {
        "background": "#fff"
    },
    "unread inbox-data-date>:first-child": {
        "fontWeight": "700"
    },
    "unread inbox-data-from>:first-child": {
        "fontWeight": "700"
    },
    "unread inbox-data-message>:first-child>:first-child": {
        "fontWeight": "700"
    },
    "trhighlight td": {
        "background": "#ffc!important",
        "color": "#333"
    },
    "trunreadhighlight td": {
        "background": "#ffc!important",
        "color": "#333"
    },
    "inbox-checkbox-triggered": {
        "display": "inline-block"
    },
    "inbox-checkbox-triggered>btn-group": {
        "marginRight": 10
    },
    "inbox-checkbox-triggered>btn-group btn": {
        "paddingLeft": 14,
        "paddingRight": 14
    },
    "compose-mail-mini": {
        "marginLeft": 4
    },
    "inbox-space": {
        "display": "block",
        "width": 185
    },
    "inbox-space>progress": {
        "marginTop": 5
    },
    "inbox-menu-lg": {
        "listStyle": "none",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0
    },
    "inbox-menu-lg li a": {
        "display": "block",
        "paddingTop": 6,
        "paddingRight": 15,
        "paddingBottom": 7,
        "paddingLeft": 15,
        "fontSize": 13,
        "color": "#333"
    },
    "inbox-menu-lg li": {
        "display": "block",
        "width": "100%"
    },
    "inbox-menu-lg li a:hover": {
        "textDecoration": "none",
        "background": "#f4f4f4"
    },
    "inbox-menu-lg liactive a": {
        "fontWeight": "700",
        "background": "#F0F0F0",
        "borderBottom": "1px solid #E7E7E7",
        "color": "#3276b1"
    },
    "inbox-menu-sm": {
        "listStyle": "none",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0
    },
    "inbox-menu-sm li a": {
        "display": "block",
        "paddingTop": 8,
        "paddingRight": 15,
        "paddingBottom": 10,
        "paddingLeft": 15,
        "fontSize": 13,
        "color": "#333"
    },
    "inbox-menu-sm li": {
        "display": "block",
        "width": "100%"
    },
    "inbox-menu-sm li a:hover": {
        "textDecoration": "none",
        "background": "#f4f4f4"
    },
    "inbox-menu-sm liactive a": {
        "fontWeight": "700",
        "background": "#F0F0F0",
        "borderBottom": "1px solid #E7E7E7",
        "color": "#3276b1"
    },
    "email-open-header": {
        "marginTop": -10,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": 20,
        "borderBottom": "1px solid #bfbfbf",
        "borderTop": "1px solid #eee",
        "paddingTop": 15,
        "paddingRight": 3,
        "paddingBottom": 15,
        "paddingLeft": 3
    },
    "email-open-header>span": {
        "fontSize": 10,
        "fontWeight": "400",
        "paddingTop": 3,
        "paddingRight": 5,
        "paddingBottom": 3,
        "paddingLeft": 5,
        "letterSpacing": "normal",
        "textTransform": "uppercase",
        "verticalAlign": "middle",
        "lineHeight": 33,
        "background": "#ACACAC"
    },
    "inbox-info-bar": {
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0,
        "borderBottom": "1px solid #bfbfbf",
        "position": "relative"
    },
    "inbox-info-bar img": {
        "width": 35,
        "height": "auto",
        "display": "inline-block",
        "verticalAlign": "middle",
        "marginRight": 7,
        "marginLeft": 2,
        "borderLeft": "3px solid #fff"
    },
    "inbox-download": {
        "paddingTop": 15,
        "paddingRight": 4,
        "paddingBottom": 15,
        "paddingLeft": 4,
        "borderBottom": "1px solid #bfbfbf",
        "position": "relative"
    },
    "inbox-message": {
        "paddingTop": 15,
        "paddingRight": 4,
        "paddingBottom": 15,
        "paddingLeft": 4,
        "borderBottom": "1px solid #bfbfbf",
        "position": "relative"
    },
    "inbox-compose-footer": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "background": "#F5F5F5",
        "borderBottom": "1px solid #A9A9A9",
        "position": "relative"
    },
    "email-infobox": {
        "display": "block",
        "width": 180,
        "borderBottom": "1px solid #bfbfbf",
        "paddingBottom": 0,
        "paddingTop": 15,
        "position": "absolute",
        "top": 65,
        "right": 15
    },
    "inbox-info-bar form-group": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "inbox-info-bar form-group input": {
        "borderColor": "#fff!important"
    },
    "inbox-info-bar select2-container-multi select2-choices": {
        "borderColor": "#fff!important"
    },
    "inbox-info-bar select2-choices>div": {
        "display": "none"
    },
    "inbox-info-bar col-md-1": {
        "paddingLeft": 0,
        "paddingRight": 0
    },
    "inbox-info-bar col-md-11": {
        "paddingLeft": 0,
        "paddingRight": 0
    },
    "fileinput": {
        "paddingTop": 3
    },
    "hidden": {
        "display": "none"
    },
    "inbox-info-bar em": {
        "position": "absolute",
        "top": 6,
        "right": 20,
        "textAlign": "right",
        "fontStyle": "normal"
    },
    "inbox-body note-editor note-editable": {
        "height": "100%!important"
    },
    "html": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "minHeight": "100%",
        "position": "relative"
    },
    "body": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "minHeight": "100%",
        "direction": "ltr"
    },
    "page-title": {
        "marginTop": 12,
        "marginRight": 0,
        "marginBottom": 28,
        "marginLeft": 0
    },
    "page-title span": {
        "fontSize": 16,
        "color": "#333",
        "display": "inline-block",
        "verticalAlign": 1
    },
    "label": {
        "fontWeight": "400"
    },
    ":focus": {
        "outline": "0!important"
    },
    "content": {
        "paddingTop": 10,
        "paddingRight": 14,
        "paddingBottom": 10,
        "paddingLeft": 14,
        "position": "relative"
    },
    "bodycontainer": {
        "position": "absolute",
        "left": 0,
        "right": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "borderLeft": "1px solid #bfbfbf",
        "borderRight": "1px solid #bfbfbf",
        "boxShadow": "0 2px 70px rgba(0, 0, 0, .45)"
    },
    "row-seperator-header": {
        "marginTop": 15,
        "marginRight": 14,
        "marginBottom": 20,
        "marginLeft": 14,
        "borderBottom": "none",
        "display": "block",
        "color": "#646464",
        "fontSize": 20,
        "fontWeight": "400"
    },
    "center-canvas": {
        "display": "block!important",
        "marginTop": 0,
        "marginRight": "auto!important",
        "marginBottom": 0,
        "marginLeft": "auto!important"
    },
    "center-child-canvas>canvas": {
        "display": "block!important",
        "marginTop": 0,
        "marginRight": "auto!important",
        "marginBottom": 0,
        "marginLeft": "auto!important"
    },
    "bordered": {
        "border": "1px solid rgba(0, 0, 0, .2)"
    },
    "bordered:hover": {
        "border": "1px solid rgba(0, 0, 0, .4)"
    },
    "header": {
        "display": "block",
        "height": 49,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 13,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "backgroundColor": "#f3f3f3",
        "backgroundImage": "linear-gradient(to bottom, #f3f3f3, #e2e2e2)",
        "backgroundRepeat": "repeat-x",
        "position": "relative",
        "zIndex": 905
    },
    "header>div": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "height": 49,
        "float": "left"
    },
    "header>divopen": {
        "fontWeight": "700"
    },
    "logo": {
        "display": "inline-block",
        "width": 175,
        "marginTop": 13,
        "marginLeft": 9
    },
    "logo img": {
        "width": 110,
        "height": "auto",
        "paddingLeft": 3
    },
    "header>:first-child": {
        "width": 220
    },
    "aside": {
        "width": 220
    },
    "left-panel": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "zIndex": 904,
        "paddingTop": 49,
        "WebkitTransition": "250ms cubic-bezier(0.1, .57, .1, 1)",
        "transition": "250ms cubic-bezier(0.1, .57, .1, 1)",
        "WebkitTransform": "translate(0px, 0) translateZ(0px)"
    },
    "main": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 52,
        "paddingLeft": 0,
        "minHeight": 500,
        "position": "relative",
        "overflow": "hidden"
    },
    "no-content-padding": {
        "marginTop": -10,
        "marginRight": -14,
        "marginBottom": 0,
        "marginLeft": -14
    },
    "no-padding": {
        "paddingTop": "0!important",
        "paddingRight": "0!important",
        "paddingBottom": "0!important",
        "paddingLeft": "0!important"
    },
    "display-inline": {
        "display": "inline-block!important"
    },
    "display-normal": {
        "display": "inline!important"
    },
    "cursor-pointer": {
        "cursor": "pointer"
    },
    "pull-right": {
        "float": "right!Important"
    },
    "pull-left": {
        "float": "left!Important"
    },
    "display-none": {
        "display": "none!important"
    },
    "checkbox input[type=checkbox]checkbox+span": {
        "marginLeft": -20
    },
    "checkbox-inline input[type=checkbox]checkbox+span": {
        "marginLeft": -20
    },
    "radio input[type=radio]radiobox+span": {
        "marginLeft": -20
    },
    "radiobox-inline input[type=radio]radiobox+span": {
        "marginLeft": -20
    },
    "input[type=checkbox]checkbox+span": {
        "verticalAlign": "middle",
        "lineHeight": 20,
        "boxSizing": "content-box!important",
        "WebkitBoxSizing": "content-box!important",
        "MozBoxSizing": "content-box!important"
    },
    "label input[type=radio]radiobox+span": {
        "verticalAlign": "middle",
        "lineHeight": 17,
        "position": "relative",
        "zIndex": 19,
        "display": "inline-block",
        "marginTop": 0,
        "marginRight": 5,
        "marginBottom": 0,
        "marginLeft": 0,
        "minHeight": 14,
        "minWidth": 14
    },
    "input[type=checkbox]checkbox+span:after": {
        "boxSizing": "content-box!important",
        "WebkitBoxSizing": "content-box!important",
        "MozBoxSizing": "content-box!important"
    },
    "input[type=checkbox]checkbox+span:before": {
        "boxSizing": "content-box!important",
        "WebkitBoxSizing": "content-box!important",
        "MozBoxSizing": "content-box!important"
    },
    "input[type=radio]radiobox+span": {
        "boxSizing": "content-box!important",
        "WebkitBoxSizing": "content-box!important",
        "MozBoxSizing": "content-box!important"
    },
    "input[type=radio]radiobox+span:after": {
        "boxSizing": "content-box!important",
        "WebkitBoxSizing": "content-box!important",
        "MozBoxSizing": "content-box!important"
    },
    "input[type=radio]radiobox+span:before": {
        "boxSizing": "content-box!important",
        "WebkitBoxSizing": "content-box!important",
        "MozBoxSizing": "content-box!important"
    },
    "input[type=checkbox]checkbox": {
        "visibility": "hidden",
        "position": "absolute",
        "zIndex": 20,
        "width": 18,
        "height": 18
    },
    "input[type=radio]radiobox": {
        "visibility": "hidden",
        "position": "absolute",
        "zIndex": 20,
        "width": 18,
        "height": 18
    },
    "label input[type=checkbox]checkbox+span": {
        "position": "relative",
        "zIndex": 19,
        "display": "inline-block",
        "marginTop": 0,
        "marginRight": 5,
        "marginBottom": 0,
        "marginLeft": 0,
        "lineHeight": 17,
        "minHeight": 14,
        "minWidth": 14
    },
    "label input[type=checkbox]checkbox+span:hover": {
        "cursor": "pointer"
    },
    "label input[type=radio]radiobox+span:hover": {
        "cursor": "pointer"
    },
    "label input[type=checkbox]checkbox+span:before": {
        "fontFamily": "FontAwesome",
        "fontSize": 12,
        "borderRadius": 0,
        "content": "\\a0",
        "display": "inline-block",
        "textAlign": "center",
        "verticalAlign": "middle",
        "paddingTop": 1,
        "paddingRight": 1,
        "paddingBottom": 1,
        "paddingLeft": 1,
        "height": 12,
        "lineHeight": 12,
        "minWidth": 12,
        "marginRight": 5,
        "border": "1px solid #bfbfbf",
        "backgroundColor": "#f4f4f4",
        "fontWeight": "400",
        "marginTop": -1
    },
    "label input[type=radio]radiobox+span:before": {
        "fontFamily": "FontAwesome",
        "fontSize": 12,
        "borderRadius": "50%",
        "content": "\\a0",
        "display": "inline-block",
        "textAlign": "center",
        "verticalAlign": "middle",
        "paddingTop": 1,
        "paddingRight": 1,
        "paddingBottom": 1,
        "paddingLeft": 1,
        "height": 12,
        "lineHeight": 12,
        "minWidth": 12,
        "marginRight": 5,
        "border": "1px solid #bfbfbf",
        "backgroundColor": "#f4f4f4",
        "fontWeight": "400",
        "marginTop": -1,
        "MozBorderRadius": "50%",
        "WebkitBorderRadius": "50%",
        "boxShadow": "inset 0 2px 3px 0 rgba(0, 0, 0, .1), 0 1px 0 0 rgba(255, 255, 255, .2)"
    },
    "label input[type=radio]radiobox:checked+span": {
        "fontWeight": "700"
    },
    "label input[type=radio]radiobox:checked+span:before": {
        "content": "\\f111",
        "color": "#2E7BCC"
    },
    "label input[type=radio]radioboxstyle-2:checked+span:before": {
        "color": "#66665e",
        "borderColor": "#4d90fe",
        "fontSize": 9
    },
    "label input[type=radio]radioboxstyle-2:checked+span": {
        "fontWeight": "400"
    },
    "label:hover input[type=radio]radiobox+span:before": {
        "color": "#2E7BCC",
        "borderColor": "#2E7BCC"
    },
    "label:hover input[type=radio]radiobox:checked+span:before": {
        "color": "#2E7BCC",
        "borderColor": "#2E7BCC"
    },
    "label:hover input[type=radio]radioboxstyle-2:checked+span:before": {
        "color": "#66665e",
        "borderColor": "#4d90fe"
    },
    "label:active input[type=radio]radiobox+span:before": {
        "boxShadow": "inset 0 2px 3px 0 rgba(0, 0, 0, .3), 0 1px 0 0 rgba(255, 255, 255, .4)"
    },
    "label input[type=radio][disabled]radiobox+span": {
        "color": "#A7A7A7",
        "cursor": "not-allowed"
    },
    "label input[type=radio][disabled]radiobox:checked+span": {
        "color": "#A7A7A7",
        "cursor": "not-allowed"
    },
    "label:hover input[type=radio][disabled]radiobox:checked+span:before": {
        "color": "#A7A7A7",
        "cursor": "not-allowed",
        "background": "#eee!important",
        "borderColor": "#CCC!important",
        "boxShadow": "none"
    },
    "label input[type=radio][disabled]radiobox:checked+span:before": {
        "content": "\\f111",
        "background": "#eee!important",
        "borderColor": "#CCC!important",
        "boxShadow": "none",
        "color": "#A7A7A7"
    },
    "label input[type=radio][disabled]radiobox+span:before": {
        "background": "#eee!important",
        "borderColor": "#CCC!important",
        "boxShadow": "none",
        "color": "#A7A7A7"
    },
    "label:active input[type=radio][disabled]radiobox:checked+span:before": {
        "background": "#eee!important",
        "borderColor": "#CCC!important",
        "boxShadow": "none",
        "color": "#A7A7A7"
    },
    "label input[type=checkbox]checkbox:checked+span:before": {
        "content": "\\f00c",
        "color": "#2E7BCC"
    },
    "label input[type=checkbox]checkbox:checked+span": {
        "fontWeight": "700"
    },
    "label input[type=checkbox]checkboxstyle-2+span:before": {
        "background": "0 0",
        "borderColor": "#c1c1c1",
        "boxShadow": "none"
    },
    "label input[type=checkbox]checkboxstyle-2:checked+span:before": {
        "content": "\\f00c",
        "color": "#66665e",
        "borderColor": "#4d90fe",
        "background": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUQ0MEM4RUFEQUE4MTFFMkEwMjM5NzlCRjAxM0UwRjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUQ0MEM4RUJEQUE4MTFFMkEwMjM5NzlCRjAxM0UwRjciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxRDQwQzhFOERBQTgxMUUyQTAyMzk3OUJGMDEzRTBGNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxRDQwQzhFOURBQTgxMUUyQTAyMzk3OUJGMDEzRTBGNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsD/PVAAAAAQSURBVHjaYv7//78vQIABAAlYA05NMPppAAAAAElFTkSuQmCC) #fff"
    },
    "label input[type=checkbox]checkboxstyle-2:checked+span": {
        "fontWeight": "400"
    },
    "label:active input[type=checkbox]checkbox+span:before": {
        "boxShadow": "inset 0 2px 3px 0 rgba(0, 0, 0, .3), 0 1px 0 0 rgba(255, 255, 255, .4)"
    },
    "label:hover input[type=checkbox]checkbox+span:before": {
        "color": "#2E7BCC",
        "borderColor": "#2E7BCC"
    },
    "label:hover input[type=checkbox]checkboxstyle-2+span:before": {
        "boxShadow": "inset 0 2px 3px 0 rgba(0, 0, 0, .1), 0 1px 0 0 rgba(255, 255, 255, .2)"
    },
    "label:hover input[type=checkbox]checkboxstyle-2:checked+span:before": {
        "boxShadow": "inset 0 2px 3px 0 rgba(0, 0, 0, .3), 0 1px 0 0 rgba(255, 255, 255, .4)"
    },
    "label:active input[type=checkbox]checkbox:checked+span:before": {
        "color": "#fff",
        "background": "#2E7BCC",
        "borderColor": "#2E7BCC"
    },
    "label:active input[type=checkbox]checkboxstyle-2+span:before": {
        "color": "#66665e",
        "background": "0 0",
        "borderColor": "#c1c1c1",
        "boxShadow": "inset 0 2px 3px 0 rgba(0, 0, 0, .3), 0 1px 0 0 rgba(255, 255, 255, .4)"
    },
    "label:active input[type=checkbox]checkboxstyle-2:checked+span:before": {
        "color": "#66665e",
        "background": "0 0",
        "borderColor": "#c1c1c1",
        "boxShadow": "inset 0 2px 3px 0 rgba(0, 0, 0, .3), 0 1px 0 0 rgba(255, 255, 255, .4)"
    },
    "label input[type=checkbox][disabled]checkbox+span": {
        "color": "#A7A7A7",
        "cursor": "not-allowed"
    },
    "label input[type=checkbox][disabled]checkbox:checked+span": {
        "color": "#A7A7A7",
        "cursor": "not-allowed"
    },
    "label:hover input[type=checkbox][disabled]checkbox:checked+span:before": {
        "color": "#A7A7A7",
        "cursor": "not-allowed",
        "background": "#eee!important",
        "borderColor": "#CCC!important",
        "boxShadow": "none!important"
    },
    "label input[type=checkbox][disabled]checkboxstyle-2:checked+span:before": {
        "content": "\\f00c"
    },
    "label input[type=checkbox][disabled]checkbox:checked+span:before": {
        "content": "\\f00c",
        "background": "#eee!important",
        "borderColor": "#CCC!important",
        "color": "#A7A7A7",
        "boxShadow": "none!important"
    },
    "label input[type=checkbox][disabled]checkbox+span:before": {
        "background": "#eee!important",
        "borderColor": "#CCC!important",
        "color": "#A7A7A7",
        "boxShadow": "none!important"
    },
    "label:active input[type=checkbox][disabled]checkbox:checked+span:before": {
        "background": "#eee!important",
        "borderColor": "#CCC!important",
        "color": "#A7A7A7",
        "boxShadow": "none!important"
    },
    "page-footer": {
        "height": 52,
        "paddingTop": 15,
        "paddingRight": 13,
        "paddingBottom": 0,
        "paddingLeft": 13,
        "borderTop": "1px solid #CECECE",
        "background": "#2a2725",
        "width": "100%",
        "position": "absolute",
        "display": "block",
        "bottom": 0
    },
    "txt-color-white": {
        "color": "#FFF"
    },
    "fa-15x": {
        "fontSize": 1.5
    },
    "fa:hover": {
        "color": "#2196f3"
    },
    "textarea": {
        "width": "100%",
        "minHeight": 300,
        "border": "1px solid #a7a7a7",
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15
    },
    "switch": {
        "position": "relative",
        "display": "inline-block",
        "width": 60,
        "height": 34
    },
    "switch input": {
        "display": "none"
    },
    "slider": {
        "position": "absolute",
        "cursor": "pointer",
        "top": 0,
        "left": 0,
        "right": 0,
        "bottom": 0,
        "backgroundColor": "#ccc",
        "WebkitTransition": ".4s",
        "transition": ".4s"
    },
    "slider:before": {
        "position": "absolute",
        "content": "",
        "height": 26,
        "width": 26,
        "left": 4,
        "bottom": 4,
        "backgroundColor": "white",
        "WebkitTransition": ".4s",
        "transition": ".4s"
    },
    "input:checked + slider": {
        "backgroundColor": "#2196F3"
    },
    "input:focus + slider": {
        "boxShadow": "0 0 1px #2196F3"
    },
    "input:checked + slider:before": {
        "WebkitTransform": "translateX(26px)",
        "MsTransform": "translateX(26px)",
        "transform": "translateX(26px)"
    },
    "sliderround": {
        "borderRadius": 34
    },
    "sliderround:before": {
        "borderRadius": "50%"
    }
});