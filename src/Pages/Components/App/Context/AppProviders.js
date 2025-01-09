import { Login } from "./Login";
import { Api } from "./Api";
import { Darkmode } from "./Darkmode";
import { ShoppingCard } from "./ShoppingCard";

const AppProviders = ({ children }) => {
  return (
    <Login>
      <Api>
        <ShoppingCard>
          <Darkmode>{children}</Darkmode>
        </ShoppingCard>
      </Api>
    </Login>
  );
};

export default AppProviders;
