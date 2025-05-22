import type { NextApiRequest, NextApiResponse } from 'next';
import { getAuth } from "firebase-admin/auth";
import { adminApp } from '@/lib/firebase'; // Firebase Admin başlatıldığı dosya
import crypto from 'crypto';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const uid = crypto.randomUUID();
    const auth = getAuth(adminApp); // ✅ Admin app instance'ı kullanılıyor
    const customToken = await auth.createCustomToken(uid);
    
    return res.status(200).json({ token: customToken });
  } catch (error) {
    console.error('Error creating custom token:', error);
    return res.status(500).json({ error: 'Failed to create token' });
  }
}
