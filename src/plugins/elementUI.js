import { Button, Select, Form, FormItem, Input, Table, Row, Col, Breadcrumb, BreadcrumbItem, Image, Menu, MenuItem,Submenu,MenuItemGroup } from 'element-ui';

export function installElementUI(Vue) {
    Vue.use(Button).use(Select).use(Form).use(FormItem).use(Input).use(Table).use(Row).use(Col).use(Breadcrumb).use(BreadcrumbItem).use(Image)
    .use(Menu).use(MenuItem).use(Submenu).use(MenuItemGroup)
}
