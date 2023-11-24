import {
    Paper,
    TextInput,
    PasswordInput,
    Button,
    Title,
    Text,
    Anchor,
    Group,
    Stack,
  } from "@mantine/core";
  
  import classes from './Auth.module.css';

  export function Singup(props)  {
    return (
      <div className={classes.wrapper}>
        <Paper className={classes.form} radius={0} p={30}>
          <Title
            order={2}
            className={classes.title}
            align="center"
            mt="md"
            mb={8}
          >
            Create an Account
          </Title>
          <Stack>
            <TextInput label="Name" placeholder="Name" required />
            <TextInput label="Email" placeholder="you@mantine.dev" required />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              defaultValue="secret"
              required
            />
            <PasswordInput label="Confirm password" defaultValue="secret" />
          </Stack>
          <Group position="apart" mt="xs">
            <Anchor
              onClick={(event) => event.preventDefault()}
              href="#"
              size="sm"
            >
              Forgot password?
            </Anchor>
          </Group>
          <Button fullWidth mt="xl">
            Sign Up
          </Button>
          <Text c="dimmed" size="sm" align="center" mt={5}>
            Already have an account ?{" "}
            <Anchor
              href="#"
              size="sm"
              onClick={(event) => event.preventDefault()}
            >
              Sign IN
            </Anchor>
          </Text>
        </Paper>
      </div>
    );
  }
  