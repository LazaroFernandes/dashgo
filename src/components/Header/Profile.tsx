import { Avatar, Box, Flex, Text} from "@chakra-ui/react";

interface ProfileProps{
    showProfileData?: boolean;
}

export function Profile({showProfileData = true}:ProfileProps) {
    return (
        <Flex align="center">
        {showProfileData && (
                <Box mr="4" textAlign="right">
                <Text>Lazaro Fernandes</Text>
                <Text color="gray.300" fontSize="small">
                    lazarofernandes240@gmail.com
                </Text>
            </Box>
        )}
            <Avatar size="md" name="Lazaro Fernandes" src="https://github.com/LazaroFernandes.png" />
        </Flex>
    )
}