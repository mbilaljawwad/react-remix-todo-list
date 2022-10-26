import Button from "~/common/components/atoms/Button";
import Card from "~/common/components/molecules/Card";

const LoginRoute = () => {
  return (
    <Card classNameModifier="w-96">
      <form action="submit">
        <Button type="submit" variant="primary">
          Sign In
        </Button>
      </form>
    </Card>
  );
};

export default LoginRoute;
