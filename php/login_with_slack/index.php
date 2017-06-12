<?php

require 'vendor/autoload.php';


// Create app
$app = new \Slim\App();

// Get containers
$container = $app->getContainer();

// Register component on containers
$container['view'] = function ($container) {
    $view = new \Slim\Views\Twig('.//templates');

    // Instantiate and add Slim specific extension
    $basePath = rtrim(str_ireplace('index.php', '', $container['request']->getUri()->getBasePath()), '/');
    $view->addExtension(new Slim\Views\TwigExtension($container['router'], $basePath));

    return $view;
};

$app->get('/', function ($request, $response, $args) {
    return $this->view->render($response, 'index.html', []);
});

$app->get('/callback', function ($request, $response, $args) {
    $provider = new \League\OAuth2\Client\Provider\GenericProvider([
        'clientId'                => '#{clientID}',    // The client ID assigned to you by the provider
        'clientSecret'            => '#{clientSecret}',   // The client password assigned to you by the provider
//    'redirectUri'             => 'http://example.com/your-redirect-url/',
    'urlAuthorize'            => 'https://slack.com/oauth/authorize',
    'urlAccessToken'          => 'https://slack.com/api/oauth.access',
    'urlResourceOwnerDetails' => 'https://slack.com/api/users.identity'
    ]);

    try {

        // Try to get an access token using the authorization code grant.
        $accessToken = $provider->getAccessToken('authorization_code', [
            'code' => $_GET['code']
        ]);

        // We have an access token, which we may use in authenticated
        // requests against the service provider's API.
        echo $accessToken->getToken() . "\n";
//        echo $accessToken->getRefreshToken() . "\n";
//        echo $accessToken->getExpires() . "\n";
//        echo ($accessToken->hasExpired() ? 'expired' : 'not expired') . "\n";

        // Using the access token, we may look up details about the
        // resource owner.
//        $resourceOwner = $provider->getResourceOwner($accessToken);
//
//        var_export($resourceOwner->toArray());

        // The provider provides a way to get an authenticated API request for
        // the service, using the access token; it returns an object conforming
        // to Psr\Http\Message\RequestInterface.
        $request = $provider->getAuthenticatedRequest(
            'GET',
            'https://slack.com/api/users.identity',
            $accessToken
        );

        var_dump($request);

    } catch (\League\OAuth2\Client\Provider\Exception\IdentityProviderException $e) {

        // Failed to get the access token or user details.
        exit($e->getMessage());

    }
});

// Run app
$app->run();
