// Components
import NavItem from "@/components/navigation/nav-item";

// Types
import type { NavItem as NavItemType } from "@/assets/types/globals";

export default function Navigation() {
  const navItems: NavItemType[] = [
    { url: "/", label: "Users", button: false },
    { url: "/create", label: "Create", button: true },
  ];

  return (
    <header className="w-full h-16 bg-darkSlateGrey top-0 sticky">
      <div className="main-container h-full">
        <nav className="h-full">
          <ul className="h-full flex flex-row items-center gap-6">
            {navItems.map((item) => (
              <NavItem navItem={item} key={item.url} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
