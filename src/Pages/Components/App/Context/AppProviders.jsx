import { Darkmode } from "./Darkmode";
import { Search } from "./Search";
import { ShoppingCard } from "./ShoppingCard";
import { Userpannel } from "./Userpannel";

const AppProviders = ({ children }) => {
  return (
    <ShoppingCard>
      <Userpannel>
        <Search>
          <Darkmode>{children}</Darkmode>
        </Search>
      </Userpannel>
    </ShoppingCard>
  );
};
export default AppProviders;
