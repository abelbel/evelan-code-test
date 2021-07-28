import { useInfiniteQuery } from "react-query";
import {
  SimpleGrid,
  Button,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";
import UserCard from "./UserCard";
import UserSchema from "../../models/User";
import axios from "axios";

const fetchUsers = async ({ pageParam = 1 }) => {
  const response = await axios.get("https://reqres.in/api/users", {
    params: {
      page: pageParam,
      per_page: 2,
    },
  });
  return response.data.data;
};

const UserList = () => {
  const { isLoading, fetchNextPage, data } = useInfiniteQuery(
    "users",
    fetchUsers,
    {
      getNextPageParam: (lastPage, pages) => pages.length + 1,
    }
  );

  const loadUsersHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    fetchNextPage();
  };
  return (
    <Center py={6}>
      <SimpleGrid columns={2} spacing={10}>
        {data?.pages.flat(1).map((user: UserSchema) => (
          <UserCard user={user} key={user.id} />
        ))}
        <Button
          isLoading={isLoading}
          w={"full"}
          mt={8}
          bg={useColorModeValue("#151f21", "gray.900")}
          color={"white"}
          rounded={"md"}
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "lg",
          }}
          onClick={loadUsersHandler}
        >
          Load more...
        </Button>
      </SimpleGrid>
    </Center>
  );
};

export default UserList;
