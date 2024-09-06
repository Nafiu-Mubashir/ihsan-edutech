import {
    Avatar,
    Input,
    InputGroup,
    InputLeftElement,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
} from "@chakra-ui/react";
import { Bell, CaretDown, MagnifyingGlass } from "@phosphor-icons/react";
import Cookies from 'js-cookie';

const Navbar = () => {

    const user = Cookies.get('user');
    const parsedUser = JSON.parse(user); 
  return (
    <div>
          <div className="bg-ihsan border-none rounded-t-xl p-3 flex justify-between items-center">
              <div className="flex items-center gap-1">
                  <Avatar src="" name="I hsan" />
                  <h2 className="uppercase font-bold text-white">IHSAN</h2>
              </div>

              <div>
                  <InputGroup>
                      <InputLeftElement pointerEvents="none">
                          <MagnifyingGlass
                              size={16}
                              color="white"
                              className="mt-[-5px]"
                          />
                      </InputLeftElement>
                      <Input
                          type="text"
                          placeholder="search text"
                          size={"sm"}
                          width={"21rem"}
                          borderRadius={"100"}
                          className="!bg-ihsan placeholder:text-white text-white focus:!border-white focus:!ring-0 focus:!outline-none"
                      />
                  </InputGroup>
              </div>

              <div className="flex items-center gap-2">
                  <div className="bg-ihsan rounded-full p-2">
                      <Bell size={26} color="white" />
                  </div>
                  <Menu className="!z-20">
                      <MenuButton rightIcon={<CaretDown size="20" />}>
                          <Avatar src="" name={`${parsedUser.first_name} ${parsedUser.last_name}`} />
                      </MenuButton>
                      <MenuList sx={{ bg: "!bg-ihsan" }}>
                          <MenuItem
                              sx={{ bg: "!bg-ihsan" }}
                              className="!text-white hover:bg-white/40 hover:backdrop-blur-md hover:border hover:border-white/50"
                          >
                              Download
                          </MenuItem>
                          <MenuItem
                              sx={{ bg: "!bg-ihsan" }}
                              className="!text-white hover:bg-white/40 hover:backdrop-blur-md hover:border hover:border-white/50"
                          >
                              Create a Copy
                          </MenuItem>
                          <MenuItem
                              sx={{ bg: "!bg-ihsan" }}
                              className="!text-white hover:bg-white/40 hover:backdrop-blur-md hover:border hover:border-white/50"
                          >
                              Mark as Draft
                          </MenuItem>
                          <MenuItem
                              sx={{ bg: "!bg-ihsan" }}
                              className="!text-white hover:bg-white/40 hover:backdrop-blur-md hover:border hover:border-white/50"
                          >
                              Delete
                          </MenuItem>
                          <MenuItem
                              sx={{ bg: "!bg-ihsan" }}
                              className="!text-white hover:bg-white/40 hover:backdrop-blur-md hover:border hover:border-white/50"
                          >
                              Attend a Workshop
                          </MenuItem>
                      </MenuList>
                  </Menu>
              </div>
          </div></div>
  )
}

export default Navbar