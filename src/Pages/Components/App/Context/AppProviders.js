import { Login } from "./Login";
import { Darkmode } from "./Darkmode";
import { ShoppingCard } from "./ShoppingCard";
import { Api } from "./Api";


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
