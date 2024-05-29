import { DocumentStore } from '@tradetrust-tt/document-store'

const getRoleString = async (
    documentStore: DocumentStore,
    role: string
): Promise<string> => {
    switch (role) {
        case 'admin':
            return await documentStore.DEFAULT_ADMIN_ROLE()
        case 'issuer':
            return await documentStore.ISSUER_ROLE()
        case 'revoker':
            return await documentStore.REVOKER_ROLE()
        default:
            throw new Error('Invalid role')
    }
}
export { getRoleString as getDocumentStoreRoleString }
export const rolesList = ['admin', 'issuer', 'revoker']
