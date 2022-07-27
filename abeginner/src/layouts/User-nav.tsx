import react from 'react';
interface ISidebarProps {
  name: string;
  href: string;
}
export const Sidebar = ({ items }: { items: ISidebarProps[] }) => (
  <div>
    <ul>
      {items.map((item) => {
        return (
          <li key={item.href}>
            <a role='navigation' href={item.href}>
              {item.name}
            </a>
          </li>
        );
      })}
    </ul>
  </div>
);
