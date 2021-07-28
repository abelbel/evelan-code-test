import {
  Heading,
  Avatar,
  Text,
} from "@chakra-ui/react";
import Card from "../UI/Card";
import UserSchema from "../../models/User";

const UserCard: React.FC<{
  user: UserSchema;
}> = (props) => {
  const fullName = `${props.user.first_name} ${props.user.last_name}`;
  return (
    <Card>
      <Avatar
        size={"xl"}
        src={props.user.avatar}
        alt={"Avatar Alt"}
        mb={4}
        pos={"relative"}
        _after={{
          content: '""',
          w: 4,
          h: 4,
          bg: "green.300",
          border: "2px solid white",
          rounded: "full",
          pos: "absolute",
          bottom: 0,
          right: 3,
        }}
      />
      <Heading fontSize={"2xl"} fontFamily={"body"}>
        {fullName}
      </Heading>
      <Text fontWeight={600} color={"gray.500"} mb={4}>
        {props.user.email}
      </Text>
    </Card>
  );
};

export default UserCard;
