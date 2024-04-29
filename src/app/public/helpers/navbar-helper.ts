import {NavbarData} from "../shared/types/navbar-data";

export const NavbarHelper={
  initializeNavbarData( isAdmin: boolean):NavbarData[]{
    let AllNavbarData:NavbarData[] = [
      {
        routerLink: '/dashboard/users',
        label: "utilisateurs",
        icon: 'manage_accounts',
        canAccess: isAdmin
      },
      {
        routerLink: '/dashboard/ava',
        label: "A.V.A",
        icon: 'account_balance_wallet',
        canAccess: true
      }
    ]
    return AllNavbarData.filter((navbarData:NavbarData)=>navbarData.canAccess)
  }
}
