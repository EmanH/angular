import ImgixClient from 'imgix-core-js';
import { IMGIX_NG_VERSION } from './constants';
export function createImgixClient(config) {
    const client = new ImgixClient({
        domain: config.domain,
        includeLibraryParam: false,
    });
    if (!(config.includeLibraryParam === false)) {
        client.settings.libraryParam = `ng-${IMGIX_NG_VERSION}`;
    }
    return client;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlSW1naXhDbGllbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2ZyZWQvUHJvZ3JhbW1pbmcvaW1naXgvc2RrLW1vbm9yZXBvL2pzL3BhY2thZ2VzL25nLWltZ2l4L3Byb2plY3RzL2ltZ2l4LWFuZ3VsYXIvc3JjLyIsInNvdXJjZXMiOlsiY29tbW9uL2NyZWF0ZUltZ2l4Q2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sV0FBVyxNQUFNLGVBQWUsQ0FBQztBQUV4QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFL0MsTUFBTSxVQUFVLGlCQUFpQixDQUFDLE1BQW1CO0lBQ25ELE1BQU0sTUFBTSxHQUFHLElBQUksV0FBVyxDQUFDO1FBQzdCLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTTtRQUNyQixtQkFBbUIsRUFBRSxLQUFLO0tBQzNCLENBQUMsQ0FBQztJQUVILElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsS0FBSyxLQUFLLENBQUMsRUFBRTtRQUMxQyxNQUFjLENBQUMsUUFBUSxDQUFDLFlBQVksR0FBRyxNQUFNLGdCQUFnQixFQUFFLENBQUM7S0FDbEU7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltZ2l4Q2xpZW50IGZyb20gJ2ltZ2l4LWNvcmUtanMnO1xuaW1wb3J0IHsgSW1naXhDb25maWcgfSBmcm9tICcuLi9saWIvaW1naXgtY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgSU1HSVhfTkdfVkVSU0lPTiB9IGZyb20gJy4vY29uc3RhbnRzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUltZ2l4Q2xpZW50KGNvbmZpZzogSW1naXhDb25maWcpOiBJbWdpeENsaWVudCB7XG4gIGNvbnN0IGNsaWVudCA9IG5ldyBJbWdpeENsaWVudCh7XG4gICAgZG9tYWluOiBjb25maWcuZG9tYWluLFxuICAgIGluY2x1ZGVMaWJyYXJ5UGFyYW06IGZhbHNlLFxuICB9KTtcblxuICBpZiAoIShjb25maWcuaW5jbHVkZUxpYnJhcnlQYXJhbSA9PT0gZmFsc2UpKSB7XG4gICAgKGNsaWVudCBhcyBhbnkpLnNldHRpbmdzLmxpYnJhcnlQYXJhbSA9IGBuZy0ke0lNR0lYX05HX1ZFUlNJT059YDtcbiAgfVxuXG4gIHJldHVybiBjbGllbnQ7XG59XG4iXX0=