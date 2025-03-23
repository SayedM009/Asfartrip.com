import { type MenuItemType, findAllParent, findMenuItem, getAdminMenuItems, getMenuItemFromURL } from '@/helpers/menu'
import { useToggle } from '@/hooks'
import clsx from 'clsx'
import { Fragment, useCallback, useEffect, useState } from 'react'
import { Collapse } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

type SubMenus = {
  item: MenuItemType
  itemClassName?: string
  linkClassName?: string
  activeMenuItems?: Array<string>
}

const MenuItemWithChildren = ({ item, activeMenuItems, itemClassName, linkClassName }: SubMenus) => {
  const { isOpen, toggle } = useToggle()

  return (
    <li className={itemClassName}>
      <Link className={linkClassName} to="" data-bs-toggle="collapse" role="button" aria-expanded={isOpen} onClick={() => toggle()}>
        {item.label}
      </Link>

      <Collapse in={isOpen} className="nav flex-column">
        <div>
          {(item.children ?? []).map((child, index) => (
            <Fragment key={index + child.key + index}>
              {child.children ? (
                <MenuItemWithChildren
                  item={child}
                  activeMenuItems={activeMenuItems}
                  itemClassName={itemClassName}
                  linkClassName={clsx('nav-link', { active: activeMenuItems?.includes(child.key) })}
                />
              ) : (
                <MenuItem item={child} itemClassName="nav-item" linkClassName={clsx('nav-link', { active: activeMenuItems?.includes(child.key) })} />
              )}
            </Fragment>
          ))}
        </div>
      </Collapse>
    </li>
  )
}

const MenuItem = ({ item, itemClassName, linkClassName }: SubMenus) => {
  return (
    <li className={itemClassName}>
      <Link className={linkClassName} to={item.url ?? ''} target={item.target}>
        {item.label}
      </Link>
    </li>
  )
}

const AdminMenu = () => {
  const [activeMenuItems, setActiveMenuItems] = useState<string[]>([])

  const menuItems = getAdminMenuItems()

  const { pathname } = useLocation()

  /**
   * activate the menuitems
   */
  const activeMenu = useCallback(() => {
    const trimmedURL = pathname?.replaceAll(import.meta.env.VITE_BASE_URL ?? '', '')
    const matchingMenuItem = getMenuItemFromURL(menuItems, trimmedURL)

    if (matchingMenuItem) {
      const activeMt = findMenuItem(menuItems, matchingMenuItem.key)
      if (activeMt) {
        setActiveMenuItems([activeMt.key, ...findAllParent(menuItems, activeMt)])
      }
    }
  }, [pathname, menuItems])

  useEffect(() => {
    activeMenu()
  }, [activeMenu, menuItems])

  return (
    <ul className="navbar-nav flex-column">
      {(menuItems ?? []).map((item, idx) => {
        return (
          <Fragment key={idx + item.key}>
            {item.isTitle ? (
              <li className="nav-item ms-2 my-2">{item.label}</li>
            ) : item.children ? (
              <MenuItemWithChildren
                item={item}
                activeMenuItems={activeMenuItems}
                itemClassName="nav-item"
                linkClassName={clsx('nav-link', { active: activeMenuItems.includes(item.key) })}
              />
            ) : (
              <MenuItem
                item={item}
                activeMenuItems={activeMenuItems}
                itemClassName="nav-item"
                linkClassName={clsx('nav-link', { active: activeMenuItems.includes(item.key) })}
              />
            )}
          </Fragment>
        )
      })}
    </ul>
  )
}

export default AdminMenu
