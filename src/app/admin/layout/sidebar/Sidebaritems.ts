import { uniqueId } from 'lodash'

export interface ChildItem {
  id?: number | string
  name?: string
  icon?: any
  children?: ChildItem[]
  item?: any
  url?: any
  color?: string
  disabled?: boolean
  subtitle?: string
  badge?: boolean
  badgeType?: string
  isPro?: boolean
}

export interface MenuItem {
  heading?: string
  name?: string
  icon?: any
  id?: number | string
  to?: string
  items?: MenuItem[]
  children?: ChildItem[]
  url?: any
  disabled?: boolean
  subtitle?: string
  badgeType?: string
  badge?: boolean
  isPro?: boolean
}

const SidebarContent: MenuItem[] = [
  {
    heading: 'Administración',
    children: [
      {
        name: "Dashboard",
        icon: "solar:widget-add-line-duotone",
        id: uniqueId(),
        url: "/admin",
        isPro: false

      },
      {
        name: "Calendario",
        icon: "solar:calendar-mark-line-duotone",
        id: uniqueId(),
        url: "/admin/calendario",
        isPro: false
      },
      {
        name: "Personal",
        icon: "solar:users-group-rounded-line-duotone",
        id: uniqueId(),
        url: "/admin/personal",
        isPro: false
      },
      {
        name: "Categorías",
        icon: "solar:tag-horizontal-line-duotone",
        id: uniqueId(),
        url: "/admin/categorias",
        isPro: false
      },
      {
        name: "Productos",
        icon: "solar:box-line-duotone",
        id: uniqueId(),
        url: "/admin/productos",
        isPro: false
      },
      {
        name: "Gastos",
        icon: "solar:bill-list-line-duotone",
        id: uniqueId(),
        url: "/admin/gastos",
        isPro: false
      }
    ],
  },
];

export default SidebarContent;
