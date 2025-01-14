import Commitments from './Commitments.svelte'
import Messages from './Messages.svelte'
import Profile from './Profile.svelte'
import NewRequest from './NewRequest.svelte'
import Requests from './Requests.svelte'
import RequestInfo from './RequestInfo.svelte'
import MyRequests from './MyRequests.svelte'
import NewConversation from './NewConversation.svelte'
import Login from './Login.svelte'

// https://github.com/ItalyPaleAle/svelte-spa-router
const routes = {
	'/': Login,
	'/login': Login,
	'/requests': Requests,
	'/requests/mine': MyRequests,
	'/requests/new': NewRequest,
	'/requests/:id': RequestInfo,
	'/requests/:id/new-conversation': NewConversation,
	'/commitments': Commitments,
	'/messages': Messages,
	'/messages/:id': Messages,
	'/profile': Profile,
 }

export default routes