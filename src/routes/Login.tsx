import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import {
  Flex,
  View,
  Authenticator,
  useAuthenticator,
} from '@aws-amplify/ui-react';

import Layout from '../components/Layout';

export default function Login() {
  const { route } = useAuthenticator((context) => [context.route]);
  const navigate = useNavigate();

  useEffect(() => {
    if (route === 'authenticated') {
      navigate('/admin', { replace: true });
    }
  }, [route, navigate]);

  return (
    <Layout>
      <Flex direction="column" height="100%">
        <View margin="auto">
          <Authenticator></Authenticator>
        </View>
      </Flex>
    </Layout>
  );
}
